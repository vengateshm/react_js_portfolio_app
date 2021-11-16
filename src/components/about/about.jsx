import "./about.css";
import Award from "../../img/award.png"

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/7613587/pexels-photo-7613587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p className="a-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design</h4>
                        <p className="a-award-desc">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
