import React from 'react'
import './cata.css'
import Conv from '../../../assets/certificate.jpg'

const Cata = () => {
  return (
      <>
        <div className="catagories">
            <div className="cata_left">
                <img src={Conv} alt="conv" />
                <h2>Our Certificate & Online Programs For 2021</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur laboriosam totam. Beatae, distinctio temporibus accusantium tenetur velit nisi autem atque qui numquam fuga eveniet maiores quos eligendi deleniti. At pariatur aspernatur vel distinctio! Blanditiis minus accusamus accusantium tempore eos voluptates fuga molestias ut facilis ab necessitatibus rem quos quis dicta delectus nisi qui odio dignissimos rerum vitae et debitis illum, pariatur autem. Quibusdam illum dolorem quas suscipit harum saepe, autem veritatis facilis similique quaerat explicabo, ullam earum nemo. Consequuntur deserunt a reprehenderit porro quas inventore rerum minus voluptatum dicta impedit dolore ipsum, voluptatem eius neque tempore, quasi perspiciatis eum sed odit? Impedit pariatur maiores, velit corrupti unde ut vero facere rerum veniam a quod, obcaecati soluta quam vitae aut.<br/><br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla unde doloribus inventore corrupti deserunt perferendis quidem praesentium porro, nostrum consequuntur natus dignissimos? Mollitia eveniet perspiciatis quasi reiciendis veniam maiores nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et rem iusto illum! Et nemo exercitationem velit voluptatibus eum fugiat dignissimos quisquam adipisci. Magnam, dolorum. Numquam obcaecati quia aliquid totam atque veritatis minus provident aspernatur itaque hic nihil, omnis rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><br/> Nemo ipsam distinctio molestias assumenda. Itaque dicta ut excepturi! Enim in tempore ut, dolor dicta illo culpa ducimus magnam commodi. Maiores, saepe at! Architecto asperiores tempora commodi praesentium unde velit? Laudantium accusantium modi aliquid. Ad repellendus sed natus quaerat tempore? Delectus aperiam eveniet odit iusto debitis voluptas, tenetur sunt sit officia consectetur mollitia, hic ab alias optio nihil laborum quam perspiciatis impedit itaque ipsam. Quod repellat maxime blanditiis debitis provident ex pariatur sapiente totam! Aliquid nemo mollitia consectetur suscipit fugiat porro blanditiis exercitationem similique harum accusamus architecto modi, repudiandae maxime voluptatibus nobis? Dignissimos,<br/><br/> quasi qui odio praesentium autem obcaecati iusto vero sed eveniet veniam eligendi voluptatum error quae, delectus velit expedita officia eaque nisi vel fugiat ab. Veniam placeat praesentium saepe nostrum aut quidem dicta magnam, dignissimos, facilis odio in corrupti, magni accusamus ipsa expedita illum? Quo quisquam quibusdam iste quas exercitationem obcaecati impedit odit reiciendis, itaque ut facere incidunt necessitatibus repellat est repellendus ipsam laboriosam corporis asperiores laudantium ex consequuntur velit officiis quidem quis.</p>
            </div>
            <div className="cata_right">
                <div className="cata_right_top">
                    <h3>Post Categories</h3>
                </div>
                <div className="cata_right_bottom">
                    <div className="crb_left">
                        <p>Business Analytics</p>
                        <p>Data Science</p>
                        <p>Machine Learning</p>
                        <p>Computer Science</p>
                        <p>AutoCAD</p>
                        <p>Journalism</p>
                        <p>Commerce</p>
                    </div>
                    <div className="crb_right">
                        <p>21</p>
                        <p>28</p>
                        <p>15</p>
                        <p>34</p>
                        <p>42</p>
                        <p>22</p>
                        <p>13</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="comment">
            <h2>Leave a comment</h2>
            <form action="#">
                <input type="text" className='inp' placeholder='Enter Name'/>
                <input type="text" className='inp' placeholder='Enter email'/>
                <textarea id="com" placeholder='Your Comment'></textarea>
                <div>
                    <button className='btn-rev btn-primary-rev'>POST COMMENT</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Cata