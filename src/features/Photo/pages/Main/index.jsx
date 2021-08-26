import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import "./main.scss";

MainPage.propTypes = {};

function MainPage() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    const history = useHistory();
    //console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const EditPhotoUrl = `/photos/${photo.id}`;
        history.push(EditPhotoUrl);
    };

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    };

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>

            <PhotoList
                photoList={photos}
                onPhotoEditClick={handlePhotoEditClick}
                onPhotoRemoveClick={handlePhotoRemoveClick}
            />
        </div>
    );
}

export default MainPage;