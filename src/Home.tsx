import Arrow from './assets/Arrow.png';
import Edit from './assets/Edit.png';
import Delete from './assets/Delete.png';
import './Home.css';

function Home() {
    return (
        <>
        <div className={"dates-view"}>
            <button className={"change-date-button"}>
                <img src={Arrow} alt="Change date after"/>
            </button>
        <div className={"date"}>19</div>
            <button className={"change-date-button"}><img src={Arrow} alt="Change date after" style={{transform: 'rotate(180deg)'}}/>
            </button>
        </div>
            <div className={"tasks-list"}>
                <div className={"task-body-done"}>
                    <div className={"task-name"}>
                        Wake up at 5:00
                    </div>
                    <div className={"task-buttons"}>
                    <button className={"edit"}>
                        <img src={Edit} alt="edit-button"/>
                    </button>
                    <button className={"delete"}>
                        <img src={Delete} alt="delete-button"/>
                    </button>
                            <label className="custom-checkbox">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
