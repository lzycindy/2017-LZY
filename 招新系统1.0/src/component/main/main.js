import React from 'react'
import {connect} from 'react-redux'


require('./main.css')

@connect(
    state=>state.user
)
class Main extends React.Component{


    render(){
        const image = require('./img/'+'one.jpg')
        const activityimg = require('./img/'+'activityimg.jpg')
        const image1 = require('./img/'+'two.jpg')
        const video = require('./video/2019站庆.mp4')
        const videoimg = require('./img/'+'video.jpg')
        return(
            <div className ='main_body'>
                <div className = 'mainOne'>
                    <div className ='titleOne'>
                        <img src ={image}></img>
                    </div>
                    <div className ='mainOneB'>
                        <div className = 'mainOneBLeft'>
                            
                                <p className ='fzp'>阳光网站自制视频</p> 
                                <p>阳光网站隶属于天津商业大学党委宣传部，是校园官方四大媒体之一。我们主要通过电脑技术实现校园网和阳光网站的维护和运作，以达到加强思想教育、传播校园文化的目的。</p>
                                <p>阳光网站成立于2001年，至今已有十七年的历史。自成立以来，先后发布了十六期页面，2018年新发布了第十七期页面，从校园新闻到学习资料的发布，不断充实着同学们的工作学习和校园生活。</p>
                        </div>
                        <div className ='video'>
                        <video controls poster={videoimg}>
                            <source src={video} type="video/mp4"/>
                        </video>
                        </div>
                    </div>
                </div>
                <div className = 'mainTwo'>
                    <div className = 'titleTwo'>
                        <img src ={image1}></img>
                        <p style ={{fontFamily:'fzct'}}>精彩瞬间回顾</p>
                    </div>
                    <div className ='mainTwoB'>
                        <div className ='mainTwoBR'>
                            <p>春招|天青色等烟雨，阳光在等你</p>
                            <p>天青色等烟雨，阳光在等你，月色被打捞起，晕开了结局。我们坚信加入阳光网站是一个不会让你后悔的决定</p>
                        </div>
                        <div className ='mainTwoImg'>
                            <img src={activityimg}/>
                        </div>
                        <div className ='mainTwoCom'>
                            <p>精彩评论</p>
                            <p className = 'commentor'>非常有趣 我很喜欢</p>
                            <p className = 'commentor'>--刘可爱</p>
                        </div>
                    </div>
                    <div className ='mainThreeB'>
                        <div className ='mainThreeBR'>
                            <p>时令清明，网站又双叒叕请你吃青团！</p>
                            <p>一口柔软的青团，一声追忆的清明<br/>在烟雨朦朦中，婉约成一脉温香<br/> 抒写阳光下的约定<br/> 相约如此的纯粹<br/>把香甜揉进了怀里</p>
                        </div>
                        <div className ='mainThreeImg'>
                            <img src={activityimg}/>
                        </div>
                        <div className ='mainThreeCom'>
                            <p>精彩评论</p>
                            <p className = 'commentor'>青团好好吃~</p>
                            <p className = 'commentor'>--刘可爱</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main