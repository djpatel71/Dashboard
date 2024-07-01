import React, { useState } from 'react';
import './Files.css';

function Files() {
  const [files, setFiles] = useState([
    { name: 'Report 2023', url: '/files/download/report2023.pdf', type: 'pdf' },
    { name: 'Marketing Materials', url: '/files/download/marketing.zip', type: 'zip' }
  ]);

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map(file => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type.split('/')[1] || file.name.split('.').pop()
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const categorizeFiles = (files) => {
    const categories = { pdf: [], image: [], zip: [], other: [] };
    files.forEach(file => {
      if (file.type === 'pdf') {
        categories.pdf.push(file);
      } else if (['png', 'jpg', 'jpeg', 'gif'].includes(file.type)) {
        categories.image.push(file);
      } else if (file.type === 'zip') {
        categories.zip.push(file);
      } else {
        categories.other.push(file);
      }
    });
    return categories;
  };

  const fileCategories = categorizeFiles([...files, ...uploadedFiles]);

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return '📄';
      case 'zip':
        return '🗜️';
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return '🖼️';
      default:
        return '📁';
    }
  };

  const renderFileList = (fileList) => (
    <ul className="FileDownloadList">
      {fileList.map((file, index) => (
        <li key={index} className="FileDownloadItem">
          <a href={file.url} download className="FileDownloadLink">
            {getFileIcon(file.type)} {file.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="FileDownloadContainer">
      <h2>Files</h2>
      <div className="FileCategory">
        <h3>PDF Files</h3>
        {renderFileList(fileCategories.pdf)}
      </div>
      <div className="FileCategory">
        <h3>Images</h3>
        {renderFileList(fileCategories.image)}
      </div>
      <div className="FileCategory">
        <h3>ZIP Files</h3>
        {renderFileList(fileCategories.zip)}
      </div>
      <div className="FileCategory">
        <h3>Other Files</h3>
        {renderFileList(fileCategories.other)}
      </div>
      <div className="FileUploadContainer">
        <h2>Upload Files</h2>
        <input type="file" multiple onChange={handleFileUpload} />
      </div>
    </div>
  );
}

export default Files;
