import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state =>
        state.photos.find(x => x.id === +photoId));
    //x.id so ko ss dc vs photoId nen chuyen photoId ve so

    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photoId: '',
        } : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form submit: ', values);

            setTimeout(() => {
                if (isAddMode) {
                    const action = addPhoto(values);
                    console.log({ action });
                    dispatch(action);

                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }


                history.push('/photos');
                resolve(true);
            }, 2000)
        })

    }

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;