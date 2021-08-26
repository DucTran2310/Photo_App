import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import "./main.scss";

MainPage.propTypes = {};

function MainPage() {
    const photos = useSelector(state => state.photos);
    console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
    };

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
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