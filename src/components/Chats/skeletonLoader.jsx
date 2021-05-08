import React from 'react';
import style from './style.module.css';
import Skeleton from 'react-loading-skeleton';

function SkeletonLoader(props) {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return skeleton.map(() => {
    return (
      <div className={style.contact}>
        <Skeleton width={50} height={50} circle={true} />
        <div className={style.contentBlock}>
          <div className={style.fullNameLastMessage}>
            <div className={style.fullName}>
              <Skeleton width={200} height={10} />
            </div>
            <div className={style.lastMessage}>
              <Skeleton width={150} height={10} />
            </div>
          </div>
          <div className={style.time}>
            <Skeleton width={35} height={10} />
          </div>
        </div>
      </div>
    );
  });
}

export default SkeletonLoader;
