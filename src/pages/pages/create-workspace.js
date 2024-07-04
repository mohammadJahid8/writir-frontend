import React, { useState } from 'react';
import uploadIcon from '../../assets/uploadIcon.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const PagesCreateWorkspace = () => {
    const [currentStep, setCurrentStep] = useState('workspaceInformation'); // Start with workspace info step
    const [isInfoCompleted, setIsInfoCompleted] = useState(false);
    const [isSlugCompleted, setIsSlugCompleted] = useState(false);
    const [fileName, setFileName] = useState('Choose file...');
    const [workspace, setWorkspace] = useState({
        name: '',
        slug: '',
        member: '',
    });

    const navigate = useNavigate()

    async function handleSubmit() {
        try {
            const promise = await api.post(`/workspace`, workspace);
            if (promise.status === 200) {
                alert("Workspace created successfully!")
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || `Failed`);
        }
    }

    // Function to handle progression to the next step
    const handleNextStep = () => {
        if (currentStep === 'workspaceInformation') {
            setIsInfoCompleted(true); // Mark info step completed
            setCurrentStep('workspaceSlug'); // Move to slug step
        } else if (currentStep === 'workspaceSlug') {
            setIsSlugCompleted(true); // Mark slug step completed
            setCurrentStep('inviteTeamMembers'); // Move to invite members step
        } else if (currentStep === 'inviteTeamMembers') {
            alert('All steps completed!'); // Notify all steps done
        }
    };
    // to handle input file name

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('Choose file...');
        }
    };
    // Render form content based on current step
    const renderFormContent = () => {
        switch (currentStep) {
            case 'workspaceInformation':
                return (
                    <div className='form-content'>
                        {/* Workspace info form */}
                        <div className='form-group'>
                            <label htmlFor='workspaceName' className='font-weight-bold'>
                                Workspace Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='workspaceName'
                                value={workspace.name}
                                onChange={(e) =>
                                    setWorkspace({ ...workspace, name: e.target.value })
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='workspaceLogo' className='font-weight-bold'>
                                Upload Logo (256x256)
                            </label>
                            <div className='custom-file-wrapper'>
                                <input
                                    type='file'
                                    className='custom-file-input'
                                    id='workspaceLogo'
                                    onChange={handleFileChange}
                                />
                                <div className='custom-file-label with-icon'>
                                    <span>{fileName}</span> {/* Placeholder text */}
                                    <img
                                        src={uploadIcon}
                                        alt='Upload'
                                        className='custom-file-icon'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'workspaceSlug':
                return (
                    <div className='form-content'>
                        {/* Workspace slug form */}
                        <div className='form-group'>
                            <label htmlFor='workspaceSlug' className='font-weight-bold'>
                                Workspace Slug
                            </label>
                            <input type='text' className='form-control' id='workspaceSlug' onChange={(e) =>
                                setWorkspace({ ...workspace, slug: e.target.value })
                            } value={workspace.slug} />
                        </div>
                    </div>
                );
            case 'inviteTeamMembers':
                return (
                    <div className='form-content'>
                        {/* Invite team members form */}
                        <div className='form-group'>
                            <label htmlFor='teamMembers' className='font-weight-bold'>
                                Invite Team Members
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='teamMembers'
                                placeholder='Enter email'
                                value={workspace.member}
                                onChange={(e) =>
                                    setWorkspace({ ...workspace, member: e.target.value })
                                }
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // JSX structure of the component
    return (
        <div className='container mt-5'>
            <h2>Start a new Workspace</h2>
            <p>Let's start a new workspace.</p>
            <div className='bg-white p-4 rounded shadow-sm'>
                <div className='step-container position-relative mt-4 mb-4 bg-white'>
                    <div
                        className={`step-item p-3 ${currentStep === 'workspaceInformation' || isInfoCompleted
                            ? 'workspaceActive text-dark rounded-pill'
                            : 'bg-light rounded-pill'
                            }`}
                        onClick={() => setCurrentStep('workspaceInformation')}
                    >
                        Workspace Information
                    </div>
                    {isInfoCompleted && (
                        <div
                            className={`step-line ${isSlugCompleted ? 'active' : ''}`}
                        ></div>
                    )}
                    <div
                        className={`step-item p-3 mx-2 ${currentStep === 'workspaceSlug' || isSlugCompleted
                            ? 'workspaceActive text-dark rounded-pill'
                            : 'bg-light rounded-pill'
                            }`}
                        onClick={() => isInfoCompleted && setCurrentStep('workspaceSlug')}
                    >
                        Workspace Slug
                    </div>
                    {isSlugCompleted && <div className='step-line'></div>}
                    <div
                        className={`step-item p-3 ${currentStep === 'inviteTeamMembers'
                            ? 'workspaceActive text-dark rounded-pill'
                            : 'bg-light rounded-pill'
                            }`}
                        onClick={() =>
                            currentStep === 'workspaceSlug' &&
                            setCurrentStep('inviteTeamMembers')
                        }
                    >
                        Invite Team Members
                    </div>
                </div>
                {/* Render current step's form */}
                {renderFormContent()}
                {/* Conditional rendering based on current step */}
                {currentStep !== 'inviteTeamMembers' && (
                    <div className='d-flex justify-content-center'>
                        <button
                            className='btn btn-dark mt-4 btn-custom'
                            onClick={handleNextStep}
                        >
                            Save and Continue
                        </button>
                    </div>
                )}
                {currentStep === 'inviteTeamMembers' && (
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <button
                            className='btn btn-dark mt-4 btn-custom'
                            onClick={handleNextStep}
                        >
                            Add another team member
                        </button>
                        <p className='mt-2' style={{ cursor: 'pointer' }} onClick={handleSubmit}>
                            Or <span className='font-weight-bold '>skip this step</span> and
                            Continue
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PagesCreateWorkspace;
