//import React, { useState } from 'react';
import { Modal, Button } from 'antd';


 const MyModal = ({ visible, onClose }) => {
  
    return (
      <Modal
        title="Example Modal"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Close
          </Button>
        ]}
      >
       
      </Modal>
    );
  };

  export default MyModal 


