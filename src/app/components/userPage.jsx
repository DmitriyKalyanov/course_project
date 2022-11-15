import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../api';
import PropTypes from 'prop-types';
import QualitiesList from './qualitiesList';

const UserPage = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const history = useHistory();
    useEffect(() => {
        api.users.getById(params.id).then((data) => setUser(data));
    }, []);
    const handleBack = () => {
        history.push('/users');
    };
    console.log(user);
    return (
        <div>
            {user
                ? <>
                    <h1>{user.name}</h1>
                    <h1>{`Профессия: ${user.profession.name}`}</h1>
                    <div>
                        <QualitiesList qualities={user.qualities} />
                    </div>
                    {`Встретился  ${user.completedMeetings} раз`}
                    <h1>{`Рейтинг: ${user.rate}`}</h1>
                    <button
                        onClick={() => {
                            handleBack();
                        }}
                    >
                        Все пользователи
                    </button>
                </>
                : 'loading...'
            }
        </div>
    );
};
UserPage.propTypes = {
    props: PropTypes.object,
    data: PropTypes.array
};
export default UserPage;
