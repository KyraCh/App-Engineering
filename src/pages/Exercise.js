import React, { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = () => {
    // 设置初始状态，包括 Exercise 的名称、描述和图片的 URL，以及用户编辑后的内容
    const [exerciseName, setExerciseName] = useState('Exercise Name, Exercise 1');
    const [exerciseDescription, setExerciseDescription] = useState('The squat is a compound exercise that primarily targets ' +
        'the quadriceps, hamstrings, and glutes. To perform the squat, ' +
        'stand with your feet shoulder-width apart and your toes pointing forward. ' +
        'Bend your knees and lower your hips down and back as if you were sitting down on a chair. ' +
        'Keep your back straight and your chest up. Go down as low as you can, ' +
        'ideally until your thighs are parallel to the ground. Pause for a moment, ' +
        'then push through your heels to stand back up.');
    const exerciseImageUrl = '/images/exercise.jpg';
    const exerciseVideoLink = 'http://www.youtube.com';
    const exerciseTags = 'Body';


    //Change the up to get the information from the backend database
    // useEffect(() => {
    //     axios.get('/api/exercises')
    //         .then(response => {
    //             const data = response.data;
    //             setExerciseName(data.name);
    //             setExerciseDescription(data.description);
    //             setExerciseImageUrl(data.imageUrl);
    //             setExerciseVideoLink(data.videoLink);
    //             setExerciseTags(data.tags);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    return (
        <div>
            <h1 style={{float: "left", marginLeft: '80px', marginTop: '-20px' }}>{exerciseName}</h1>
            <div style={{ display: 'flex', marginTop: '60px' }}>
                <div style={{flex: 1, marginLeft: '-300px', marginTop:'50px'}}>
                    <h2 >
                        Movement Description
                    </h2>
                    <div>
                        <Link to="/Exerciseedited">Edit</Link>
                    </div>
                    <div>
                        <p>{exerciseDescription}</p>
                        <h3>Youtube Link:</h3>
                        <a href={exerciseVideoLink}>http://www.youtube.com</a>
                        <h4>Movement Tags:</h4>
                        <p>{exerciseTags}</p>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <img src={exerciseImageUrl} style={{ width: '500px', height: '250px', float: 'right', marginRight: '40px', marginTop: '50px' }}/>
                </div>
            </div>
        </div>
    );
};

export default Exercise;
