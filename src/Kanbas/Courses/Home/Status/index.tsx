import { FaCalendar } from "react-icons/fa";
import "./index.css"


function Status() {
  return (
    <div className="course-status">
        <h2>Course Status</h2>
                <div className="container btn-group-parent">
                    <div className="btn-group" id="btn-group-2">
                        <button type="button">Unpublish</button>
                        <button type="button">Publish</button>
                    </div>
                </div>
                <div className="container btn-group-parent">
                    <div className="row btn-group">
                        <button>Import Existing Content</button>
                        <button>Import From Commons</button>
                        <button>Choose Home Page</button>
                        <button>View Course Stream</button>
                        <button>New Announcement</button>
                        <button>New Analytics</button>
                        <button>View Course Notification</button>
                    </div>
                </div>
                <div className="coming-up">
                    <div className="shared-space">
                        Coming Up
                            <span id="comup">
                                <FaCalendar/> 
                                <a href="/">
                                    View Calendar
                                  </a>
                            </span>
                      </div>
                    <ul className="coming-up-list">
                        <li><FaCalendar/> <a href="/">Lecture 1</a></li>
                        <li><FaCalendar/> <a href="/">Lecture 2</a></li>
                        <li><FaCalendar/> <a href="/">Lecture 3</a></li>
                    </ul>
                </div>
            </div>
  );
}
export default Status;

