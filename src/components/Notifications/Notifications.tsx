import React, { useEffect } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actionsNotification } from '../../store/slices/uiNotification/uiNotificationSlice';

export const Notification: React.FC = () => {
  const dispatch = useAppDispatch();

  const { message, statusOfVisibility, type } = useAppSelector((store) => store.uiNotification);

  const classnamesOfParentContainer = cn('notification bg-white', {
    'notification-success': type === 'success',
    'notification-error': type === 'error',
    'notification-wait': type === 'wait',
    show: statusOfVisibility === 'visible'
  });

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      dispatch(actionsNotification.hide());
    }, 1000);
    return () => {
      clearTimeout(idTimeout);
    };
  });

  return (
    <div className={classnamesOfParentContainer}>
      <div className="notification-content">{message}</div>
    </div>
  );
};
