import React, { useContext, useEffect } from 'react';
import SearchInput from './SearchInput';
import SearchFileCard from './SearchFileCard';
import figmaCard from '../../assets/figmaCard.png';
import titleIcon from '../../assets/searchTitle.png';
import figmaWbflow from '../../assets/figmaWebflow.png';
import figma from '../../assets/figma2.png';
import witter from '../../assets/witterIcon.png';

import SearchBottomCard from './SearchBottomCard';
import SearchPagination from './SearchPagination';
const Search = () => {
  return (
    <div className='dashboard'>
      <div
        className='d-flex flex-wrap align-items-center mb-2'
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
        <p className='mb-0 mr-2 text-muted'>Results</p>
        <div
          className='mx-2'
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#D9D9D9',
            borderRadius: '50%',
          }}
        ></div>
      </div>
      {/* static */}
      <div className='flex'>
        <p className='h2 fw-light'>
          Search Results{' '}
          <span className='text-muted h6 fw-light'>
            “How does Figma and Webflow work together..
          </span>
        </p>
      </div>
      <SearchInput />
      <div className='pt-4'>
        <ul className='nav nav-tabs nav-tabs-v2 '>
          <li className='nav-item me-3'>
            <a
              href='#interNetResult'
              className='nav-link active'
              data-bs-toggle='tab'
            >
              Internet Rssults
            </a>
          </li>
          <li className='nav-item me-3'>
            <a href='#homev2Wit' className='nav-link ' data-bs-toggle='tab'>
              Your Links
            </a>
          </li>
          <li className='nav-item me-3'>
            <a href='#homev' className='nav-link' data-bs-toggle='tab'>
              Your Folders
            </a>
          </li>
          <li className='nav-item me-3'>
            <a href='#homev' className='nav-link' data-bs-toggle='tab'>
              Your uploaded Documents
            </a>
          </li>
        </ul>
        <div className='tab-content pt-4'>
          <div className='tab-pane fade show active' id='interNetResult'>
            <SearchFileCard
              imageSrc={figmaCard}
              badgeText='Your most relevant and latest'
              title='Figma'
              subtitle='Computir Design and Development'
              link='https://www.figma.com/design/sFxPWKCbkLkPALZn8nqkVM/Computir-Design-and-Development?node-id=2094-20576&t=K2323114ffhewZb-1'
              actions={[
                { text: 'Explore', className: 'fw-bold text-primary' },
                {
                  text: 'Share',
                  className: 'fw-light text-muted text-underline',
                },
                {
                  text: 'Did this come up incorrect?',
                  className: 'fw-light text-muted text-underline',
                },
              ]}
            />
            <hr />
            <p>Answer</p>
            <hr />
            <div className='d-flex justify-content-between flex-column flex-md-row align-items-md-center'>
              <div className='d-flex align-items-center'>
                <img
                  alt=''
                  src={titleIcon}
                  style={{ width: '23px', height: '23px' }}
                  className='me-2'
                />
                <p className='h5 mb-0'>
                  How does Figma and Webflow work together...
                </p>
              </div>
              <div className='d-flex flex-column flex-md-row text-start text-md-end'>
                <div className=' me-3'>
                  <img alt='' src={witter} />
                  <span className=' ms-1 text-purple'>Send to Writir</span>
                </div>
                <div className='text-muted text-decoration-underline me-3'>
                  Share
                </div>
                <div className='text-muted text-decoration-underline'>
                  Did this come up incorrect?
                </div>
              </div>
            </div>
            <div className='pt-3'>
              <div className='mb-3'>
                Figma and Webflow can work together seamlessly through the Figma
                to Webflow plugin, which allows designers to convert their
                static Figma designs into functional Webflow websites. Here's
                how they work together:
              </div>
              <div className='mb-3'>
                <span className='fw-bold'>Design in Figma:</span> Designers
                create their website layouts, components, and styles in Figma
                using its powerful design tools.
                <br />
                Install and authorize the plugin: Users install the Figma to
                Webflow plugin and authorize it to access their Webflow account
                and specific sites or workspaces.
              </div>
              <div className='mb-3'>
                <span className='fw-bold'>Transfer assets:</span> The plugin
                transfers styling, layouts, colors, text, and images from Figma
                to Webflow, creating clean HTML and CSS code.
                <br />
                Sync components and variables: The Figma to Webflow App allows
                users to sync Figma components and variables with their Webflow
                site, enabling easy updates.
              </div>
              <div className='mb-3'>
                <span className='fw-bold'>Publish:</span> Once the design is
                finalized in Webflow, it can be published with just a few
                clicks.
                <br />
                It's important to note that this is a one-way process – changes
                made in Webflow won't be reflected back in Figma.
              </div>
              <div>
                The plugin streamlines the workflow from design to development,
                allowing designers to quickly turn their static Figma designs
                into functional, production-ready websites in Webflow.
              </div>
              <hr />
              <p>Other Reference Links</p>
              <hr />
              <div className='d-flex flex-column w-100'>
                <SearchBottomCard
                  imageSrc={figmaWbflow}
                  title='Figma to Webflow plugin'
                  description='Do you prefer to build initial site designs in Figma, then use those designs as a guideline for your Webflow site build? Now you can paste your Figma designs straight into Webflow without having to recreate each design, element by element.'
                  actions={[
                    {
                      text: 'https://university.webflow.com/lesson/figma-to-webflow-plugin?topics=layout-design',
                      className: 'text-primary',
                    },
                    {
                      text: 'Share',
                      className: 'text-muted text-decoration-underline',
                    },
                    {
                      text: 'Did this come up incorrect?',
                      className: 'text-muted text-decoration-underline',
                    },
                  ]}
                />
                <hr />
                <SearchBottomCard
                  imageSrc={figma}
                  title='Sync Figma to Webflow'
                  description='Do you prefer to build initial site designs in Figma, then use those designs as a guideline for your Webflow site build? Now you can paste your Figma designs straight into Webflow without having to recreate each design, element by element.'
                  actions={[
                    {
                      text: 'https://university.webflow.com/lesson/figma-to-webflow-plugin?topics=layout-design',
                      className: 'text-primary',
                    },
                    {
                      text: 'Share',
                      className: 'text-muted text-decoration-underline',
                    },
                    {
                      text: 'Did this come up incorrect?',
                      className: 'text-muted text-decoration-underline',
                    },
                  ]}
                />
              </div>
            </div>
            {/* <div>
              <div>Figma and Webflow can work together seamlessly through the Figma to Webflow plugin, which allows designers to convert their static Figma designs into functional Webflow websites. Here's how they work together:
              </div>
              <div>
                <span className='fw-bold'>Design in Figma:</span> Designers create their website layouts, components, and styles in Figma using its powerful design tools.
                Install and authorize the plugin: Users install the Figma to Webflow plugin and authorize it to access their Webflow account and specific sites or workspaces
              </div>
              <div>
                <span className='fw-bold'>Transfer assets:</span>  The plugin transfers styling, layouts, colors, text, and images from Figma to Webflow, creating clean HTML and CSS code.
                Sync components and variables: The Figma to Webflow App allows users to sync Figma components and variables with their Webflow site, enabling easy updates.
              </div>
              <div>
                <span className='fw-bold'> Publish: </span> Once the design is finalized in Webflow, it can be published with just a few clicks.
                It's important to note that this is a one-way process – changes made in Webflow won't be reflected back in Figma
              </div>
              <div>
                The plugin streamlines the workflow from design to development, allowing designers to quickly turn their static Figma designs into functional, production-ready websites in Webflow.
              </div>
            </div> */}
          </div>
          <div className='tab-pane fade' id='profilev2WithCard'>
            ...
          </div>
        </div>
      </div>
      <hr />
      <div className='d-flex align-items-center justify-content-center'>
        <SearchPagination />
      </div>
    </div>
  );
};

export default Search;
