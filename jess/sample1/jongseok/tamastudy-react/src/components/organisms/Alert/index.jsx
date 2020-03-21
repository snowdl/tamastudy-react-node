import { css } from '@emotion/core';
import React, { useState, useCallback } from 'react';
import Modal from '../../atoms/Modal';

const Alert = () => {
  // 일단 하드코딩.. 나중에 리덕스에서 꺼내올꺼임.
  const alerts = [{ id: 'alert1', alertTypes: 'sample alert type', msg: 'sample msg' }];

  const [alertStatus, setAlertStatus] = useState(false);

  const handleCloseAlert = useCallback(() => {
    setAlertStatus(false);
  }, [setAlertStatus]);

  if (alerts !== null && alerts.length > 0) {
    return (
      <Modal>
        <div
          css={css`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 200ms ease-in-out;
            opacity: ${alertStatus ? 1 : 0};
          `}
          onClick={handleCloseAlert}
        >
          {alerts.map((alert, index) => (
            <p
              key={index}
              css={css`
                width: 200px;
                height: 100px;
                background-color: red;
                color: white;
              `}
            >
              {alert.msg}
            </p>
          ))}
        </div>
      </Modal>
    );
  }
};

export default Alert;
