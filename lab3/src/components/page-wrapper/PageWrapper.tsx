import * as React from 'react';
import { IPageWrapperProps } from './IPageWrapperProps';
import { Outlet } from 'react-router-dom';
import styles from './PageWrapper.module.scss';
import { ToastContainer } from 'react-toastify';

const PageWrapper = ({ Element }: IPageWrapperProps) => {
    return (
        <div className={styles.container}>
            <Element />
            <ToastContainer
                position='bottom-right'
                bodyClassName={styles.toastBody}
                hideProgressBar
            />
            <div className={styles.elementContainer}>
                <Outlet />
            </div>
        </div>
    );
}

export default PageWrapper;