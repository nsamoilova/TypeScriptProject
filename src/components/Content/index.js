import React from 'react';
import styles from './style.module.scss'
import Form from './components/Form';
import Todo from './components/Todo';
import MemoShould from './components/MemoShould';
import SmallImage from 'components/Image/versions/SmallImage';
import backgroundImage from 'images/vimeo.svg';
import PrevienImages from 'components/Image/versions/PrevienImages';
import FunctionalComponent from './components/FunctionalComponent';
import TodoFunc from './components/Todo/components/TodoFunc';
import Users from './components/Users';
import FormConnected from './components/FormConnected';
import VideoPlayer from './components/VideoPlayer';
import { Routes, Route} from 'react-router-dom'
import HomePages from 'pages/HomePages';
import CoursePages from 'pages/CoursePages';
import KursyPages from 'pages/KursyPages';
import MasterPages from 'pages/MasterPages';
import TeacherPages from 'pages/TeacherPages';
import BlogPages from 'pages/BlogPages';
import ContactPages from 'pages/ContactPages';
import UsersPages from 'pages/UsersPages';
import UsersDetailPages from 'pages/UsersDetailPage';
import MayAccountPages from 'pages/MyAccountPages';
import DownloadsPages from 'pages/DownloadsPages';
import PostOnePages from 'pages/PostOnePages';
import HomeWorkPages from 'pages/HomeWorkPages';
import CommentOnePages from 'pages/CommentOnePages';
import PostTwoPages from 'pages/PostTwoPages';
import CommentTwoPages from 'pages/CommentTwoPages';
import PostThreePages from 'pages/PostThreePages';
import CommentThreePages from 'pages/CommentThreePages';
import PostsPages from 'pages/PostsPages';
import TestTypescript from '../../pages/TestTypescript';


class Content extends React.Component {
    render() {
        return (
          
          <div className={styles.content}>
            <Routes>
                <Route path='/' element={<HomePages/>}/>
                <Route path='/course' element={<CoursePages/>}/>
                <Route path='/kursy-programmirovaniya' element={<KursyPages/>}/>
                <Route path='/besplatnye-probnye-zanatia' element={<MasterPages/>}/>
                <Route path='/teacher' element={<TeacherPages/>}/>
                <Route path='/blog' element={<BlogPages/>}/>
                <Route path='/contact' element={<ContactPages/>}/>
                <Route path='/users' element={<UsersPages/>}/>
                <Route path='/users/:id' element={<UsersDetailPages/>}/>
                <Route path='/my-account' element={<MayAccountPages/>}>
                   <Route path="download" element={<DownloadsPages/>} />
                </Route>
                {/* <Route path='/' element={<HomeWorkPages/>
                <Route path='/posts' element={<PostsPages/>}>
                     
                    </Route>
                    <Route path='/post-1' element={<PostOnePages/>}>
                      <Route path="comment" element={<CommentOnePages/>} />
                    </Route>
                    <Route path='/post-2' element={<PostTwoPages/>}>
                      <Route path="comment" element={<CommentTwoPages/>} />
                    </Route>
                    <Route path='/post-3' element={<PostThreePages/>}>
                      <Route path="comment" element={<CommentThreePages/>} />
                    </Route> */}
            </Routes>


            </div>
           
        )
    }
}

export default Content;