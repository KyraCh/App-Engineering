import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../App.css";
import axios from 'axios';

const ExercisePage = () => {
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

    // 处理用户编辑的函数
    // Functions for handling user edits
    const handleUserContentChange = (event) => {
        setExerciseDescription(event.target.value);
    };

    // 处理保存用户编辑内容的函数
    // The function which save the change of description
    const handleSave = () => {
        // 发送 POST 请求，将用户编辑内容提交到后端进行处理和保存
        // Send the Post requirement, Send the new edited description to back end
        axios.post('/saveExercise', {
            name: exerciseName,
            description: exerciseDescription,
            imageUrl: exerciseImageUrl,
            videoLink: exerciseVideoLink,
            exerciseTag: exerciseTags
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="page">
            <h1 style={{float: "left", marginLeft: '80px', marginTop: '-20px' }}>{exerciseName}</h1>
            <div style={{ display: 'flex', marginTop: '60px' }}>
                <div style={{flex: 1, marginLeft: '-300px', marginTop:'50px'}}>
                    <h2 >Movement Description</h2>
                    {/*<p>{exerciseDescription}</p>*/}
                    {/*<h2>User Content</h2>*/}
                    <div>
                        <textarea value={exerciseDescription} onChange={handleUserContentChange} style={{width: '500px', height: '200px'}}/>
                        <button className="change_button" onClick={handleSave}>Save</button>
                        <h3>Youtube Link:</h3>
                        <a href={exerciseVideoLink}>http://www.youtube.com</a>
                        <h4>Movement Tags:</h4>
                        <p>{exerciseTags}</p>
                    </div>


                </div>
                <div >
                    <img src={exerciseImageUrl} style={{ width: '500px', height: '250px', float: 'right', marginRight: '40px', marginTop: '50px' }}/>
                </div>
            </div>
        </div>
    );
};

export default ExercisePage;
