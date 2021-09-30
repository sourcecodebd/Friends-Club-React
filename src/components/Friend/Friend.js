import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { friend } = props || {};
    const { id, name, username, email, address, phone, website, company } = friend;
    const { street, suite, city, zipcode, geo } = address;
    const { lat, lng } = geo;

    const url = `/friend/details/${id}`;
    const history = useHistory();

    const handleFriendClick = () => {
        history.push(`/friend/details/${id}`);
    }

    return (
        <div className="col">
            <div className="card">
                <img src={"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"} className="card-img-top" alt={name} />
                <h5 className="card-title mt-3 mb-0">{name}</h5><br />

                <div className="d-flex justify-content-center align-items-center">
                    {/* <Link className="btn btn-primary w-50" to={url}>Visit Me 3</Link> */}

                    {/* or */}

                    <Link to={url}>
                        <button className="btn btn-primary">Visit Me 1</button>
                    </Link>

                    {/* or */}

                    <button onClick={handleFriendClick} className="btn btn-warning ms-1">Visit Me 2</button>
                </div>

                <div className="card-body overflow-scroll mb-2">
                    <p className="card-text text-justify"><span className="text-secondary">Username:</span> {username}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Email: </span>{email}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Address: </span>{street}, {suite}, {city}, {zipcode}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Latitude: </span> {lat}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Longitude: </span> {lng}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Phone: </span>{phone}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Website: </span>{website}</p>
                    <p className="card-text text-justify"><span className="text-secondary">Company: </span>{company.name}</p>
                </div>
            </div>
        </div >
    );
};

export default Friend;