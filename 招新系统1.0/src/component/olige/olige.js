import React from 'react'
import {connect} from 'react-redux'
import { Avatar } from 'antd';
require('./olige.css')



@connect(
    state=>state.user
)
class Olige extends React.Component{


    render(){
        const imgone = require('./img/olignone.jpg')
        return(
            <div className ='main'>
                <div className ='olignDesc'>
                    <img className ='img3' src = {imgone}></img>
                    <div className = 'shade'></div>
                    <div className ='olignDescDiv'>
                       <div className = 'olignDescDivIn'>
                            <div className ='title1'>
                                <p>社团简介</p>
                                <p className ='downline'></p>
                            </div>
                            <p className ='olige_descrip'>
                            阳光网站隶属于天津商业大学党委宣传部，与校报记者团，广播台，双微工作室共同构成校园党委宣传部四大媒体。我们通过电脑技术实现校园网和阳光网站的维护和运作，以达到加强思想教育、传播校园文化的目的。
                            </p>
                       </div>
                       <div  className ='title1'>
                                <p>部门简介</p>
                                <p className ='downline'></p>
                        </div>
                       <div className ='dep_div'>
                           <div>
                               <h2>企划部</h2>
                               <p>主要负责网页设计、海报设计，制作校园官网的焦点图，校园官方宣传册、展板等，同时负责网站历次活动所需宣传品的设计。</p>
                           </div>
                           <div>
                                <h2>信息部</h2>
                                <p>主要负责摄影、视频及PPT的制作，聚集了一批优秀的制作人才，熟练掌握单反的使用。</p>
                           </div>
                           <div>
                                <h2>运营部</h2>
                                <p>主要负责网站的综合运营，如：活动策划、项目构建、创意改革、内容运营等。具有较强的执行力和良好的表达能力。</p>
                           </div>
                           <div>
                                <h2>开发部</h2>
                                <p>开发部作为网站运行的核心，负责创新网站的新技术，以提高网站的技术含量。主要负责阳光网站的管理和维护，以及天商各网页的制作和维护。</p>
                           </div>
                       </div>
                    </div>
                </div>
                <div className ='olignDesc'>
                    <div className ='olignorDescDiv'>
                        <div  className ='title2'>
                                <p>成员简介</p>
                                <p className ='downline'></p>
                        </div>
                        <div className ='oliger'>
                            <p className ='p1'>站长：刘亚男</p>
                            <p className ='p2'>副站长：王丹丹</p>
                            <div className ='oligner'>
                                <p>站长：刘亚男</p>
                                <img src={require(`../img/${this.props.avatar}.jpg`)}  alt=""/>
                                <p>信息工程学院 17届</p>
                            </div>
                            <p className= 'p3'>【社团成员数：29人】</p>
                        </div>
                        <div  className ='title3'>
                            <p>联系方式</p>
                            <p className ='downline'></p>
                        </div>
                        <div className ='chat'>
                            <p>微博：天商阳光网站</p>
                            <p>QQ咨询群:808547713</p>
                            <p>电话：xxxxxxxxxxx</p>
                        </div>
                    </div>
                    <div className ='activityDiv'>
                            <div>
                                <p>社团活动</p>
                                <div className ='act'>
                                    <p className ='actp1'>[阳光网站宣讲会]</p>
                                    <p className ='actp2'>时间：2019.3.15</p>
                                    <p>地点：3教102</p>
                                </div>
                                <div className ='act'>
                                    <p className ='actp1'>[阳光网站初试]</p>
                                    <p className ='actp2'>时间：2019.3.16-2019.3.17</p>
                                    <p>地点：建行二楼</p>
                                </div>
                                <div className ='act'>
                                    <p className ='actp1'>[阳光网站复试]</p>
                                    <p className ='actp2'>时间：2019.3.22</p>
                                    <p>地点：建行二楼</p>
                                </div>
                                <div className ='act'>
                                    <p className ='actp1'>[阳光网站换届]</p>
                                    <p className ='actp2'>时间：2019.3.26</p>
                                    <p>地点：建行二楼</p>
                                </div>
                                <div className ='act'>
                                    <p className ='actp1'>[青团活动]</p>
                                    <p className ='actp2'>时间：2019.4.5</p>
                                    <p>地点：建行二楼</p>
                                </div>
                                <div className ='act'>
                                    <p className ='actp1'>[站庆]</p>
                                    <p className ='actp2'>时间：2019.5.11</p>
                                    <p>地点：建行二楼</p>
                                </div>
                                
                                
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Olige