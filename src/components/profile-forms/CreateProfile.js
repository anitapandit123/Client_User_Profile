import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { loadUser } from '../../actions/auth';

const CreateProfile = ({
    createProfile,
    getCurrentProfile,
    profile: { profile, loading },
    history
}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''


    });
    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile === null ? (
        <Redirect to='/dashboard' />
    ) : (
            <Fragment>
                <h1 className='large text-primary'> Create Your Profile</h1>
                <p className='lead'>
                    <i className='fas fa-user' />Let's get some information to make your
				profile stand out
                </p>
                <small>* = required field</small>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <select name="status" value={status} onChange={e => onChange(e)}>
                            <option value='0'>*Select Professional Status</option>
                            <option value="Developer">Developer</option>
                            <option value="Junior Developer">Junior Developer</option>
                            <option value="Senior Developer">Senior Developer</option>
                            <option value='Manager'>Manager</option>
                            <option value='Student or Learning'>Student or Learning</option>
                            <option value='Instructor'>Instructor or Teacher</option>
                            <option value='Intern'>Intern</option>
                            <option value='Other'>Other</option>
                        </select>
                        <small className="form-text">Give us an idea of where you are at in your career</small>
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <input type="text"
                            placeholder="Company"
                            value={company}
                            onChange={e => onChange(e)} />
                        <small className='form-text'>
                            Could be your own company or one you work for
					</small>
                    </div>
                    <div className="form-group">
                        <label>Website</label>
                        <input
                            type="text"
                            placeholder="Website"
                            name="website"
                            value={website}
                            onChange={e => onChange(e)} />
                        <small className='form-text'>
                            Could be your own or a company website
					</small>
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={e => onChange(e)} />
                        <small className='form-text'>
                            City & state suggested (eg. Kathmandu, Pokhara)
					</small>
                    </div>
                </form>
            </Fragment>
        )
}

createProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(CreateProfile)
);