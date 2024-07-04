import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectIcon from '../cards/ProjectIcon';
import FolderCard from './FolderCard';
import { UserContext } from '../../context/context';
import { dateFormatter } from '../../helpers/timeConverter';
import ppt from '../../assets/ppt.png';
import figma from '../../assets/figma.png';
import pptlg from '../../assets/pptlg.png';
import AllFilesLinkCard from './AllFilesLinkCard';
import FolderModal from './FolderModal';
import Loader from '../Loader/Loader';
const Folder = () => {
  const { id } = useParams();
  const { projects, isLoading } = useContext(UserContext);

  // Find the project according to id
  const project = projects?.find((project) => project._id === id);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className='dashboard'>
      {/* breadcrumb */}
      <div
        className='d-flex flex-wrap align-items-center mb-5'
        style={{ fontFamily: 'Segoe UI' }}
      >
        <p className='text-primary mb-0 mr-2'>Explore</p>
        <div
          className='mx-2'
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#D9D9D9',
            borderRadius: '50%',
          }}
        ></div>
        <p className='mb-0 mr-2 text-muted'>Drive</p>
        <div
          className='mx-2'
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#D9D9D9',
            borderRadius: '50%',
          }}
        ></div>
        <p className='mb-0 text-muted'>Folder</p>
      </div>
      {/* project section */}
      <div>
        <div className='d-flex align-items-center'>
          {/* icon */}
          <div className='me-3'>
            <ProjectIcon
              height={24}
              width={24}
              fontSize={14}
              color={project?.color}
              title={project?.title?.charAt(0)?.toUpperCase()}
            />
          </div>
          <div className='me-3'>
            <p className='h4 mb-0'>{project?.title}</p>
          </div>
          <div className='me-3 text-muted'>Active Sync</div>
          <div className='text-muted'>{dateFormatter(project?.updatedAt)}</div>
        </div>
      </div>
      <hr />
      <div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-3'>
            <FolderCard
              title={'Create a new API Key for this folder'}
              subTitle={
                'Making an API Key for this folder can allow you to share it to other API connectors, AI LLMs or AI Hardware. It will wrap up your files into a single API key.'
              }
              icon={'bi bi-box'}
            />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <FolderCard
              title={'Add More Files or Links to this Folder'}
              subTitle={
                'To add a new file, simply drag and drop any cloud file to this board. OR create a new link below.'
              }
              icon={'bi bi-file-earmark-break-fill'}
            >
              <div className='row'>
                <div className='col-12 col-md-6 mb-2'>
                  <button className='btn btn-primary w-100'>
                    Add a New Link
                  </button>
                </div>
                <div className='col-12 col-md-6 mb-2'>
                  <button className='btn btn-default w-100'>
                    Upload a New File
                  </button>
                </div>
              </div>
            </FolderCard>
          </div>
        </div>
      </div>
      {/* files and links */}
      <div>
        <p className='h5'>All Files and Links </p>
        <AllFilesLinkCard
          iconSrc={ppt}
          title='powerpoint.ppt'
          subtitle='Cloud'
          date={project?.updatedAt}
          modalName={'pptModal'}
        />
        <AllFilesLinkCard
          iconSrc={figma}
          className={'bg-light'}
          title='Social Media Icons (Community)'
          subtitle='Cloud'
          date={project?.updatedAt}
        />
      </div>
      {/* modal */}
      {}
      <FolderModal
        modalId='pptModal'
        title='Comprehensive Patient Blood Test'
        backToFilesText='Back to files'
        iconSrc={pptlg}
        fileName='Filejan21st24024.pdf'
        fileLink='https://www.computir.com/patient-x/ilejan21st24024.pdfsFxPWKCbkLkPALZn8nqkVM/node-id=2094-20576&t=K2323114ffhewZb-1'
        fileNote='Creative understanding on tests and archives for how the patient is doing.'
        apiKey='SGJ3W235HSLIKA8PAD8Y7'
        folder='Designer'
        date='May 2, 2024'
        fileDetails={[
          { label: 'Type', value: 'PDF' },
          { label: 'Size', value: '4Kb' },
          { label: 'Storage Used', value: 'PDF' },
          { label: 'Type', value: '4 KB' },
          { label: 'Location', value: 'My Drive' },
          { label: 'Owner', value: 'me' },
          { label: 'Modified', value: 'Jun 10, 2024 by me' },
          { label: 'Opened', value: 'Jun 10, 2024 by me' },
          { label: 'Created', value: 'Jun 6, 2024' },
          { label: 'Download permissions', value: 'Viewers can download' },
        ]}
        onDelete={() => console.log('Delete File')}
        onInvite={() => console.log('Invite others and Create a Share Link')}
      />
    </div>
  );
};

export default Folder;
