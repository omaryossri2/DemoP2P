import React, { useState } from 'react';
import "./style/NewListingPage.css";
import CompanyImage from '../resources/CompanyLogo.jpeg';

const NewListingPage = () => {
  const [listingType, setListingType] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [subjectLevel, setSubjectLevel] = useState('');
  const [subjectBoard, setSubjectBoard] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [session, setSession] = useState('');
  const [yearBought, setYearBought] = useState('');
  const [condition, setCondition] = useState('');
  const [markingSchemeIncluded, setMarkingSchemeIncluded] = useState(false);

  const handleListingTypeChange = (event) => {
    setListingType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted:", {
      listingType,
      subjectName,
      subjectLevel,
      subjectBoard,
      teacherName,
      session,
      yearBought,
      condition,
      markingSchemeIncluded,
    });
    // Add logic for file upload
  };

  return (
    <div className='NewListingPage'>
      <div className='logo-header'>
        <img src= {CompanyImage} className="comp-imagee" alt=""/>
        <h1 className='header'>List something to sell📚</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="listingType">Type of Listing</label>
        <select id="listingType" name="listingType" onChange={handleListingTypeChange} required>
          <option value="">Select</option>
          <option value="teacherNotes">IG Teacher Notes</option>
          <option value="teacherClassified">IG Teacher Classified</option>
          <option value="pastPapers">IG Past Papers</option>
          <option value="nationalBook">National Books</option>
          <option value="americanDiploma">American Diploma Books</option>
        </select>
        {listingType === 'teacherNotes' && (
          <>
            <label htmlFor="subjectName">Subject Name</label>
            <select id="subjectName" name="subjectName" onChange={(e) => setSubjectName(e.target.value)} required>
              <option value="">Select or type if not listed</option>
              {/* Add options for each subject */}
              <option value="Accounting">Accounting</option>
              {/* Add other subjects */}
            </select>

            <label htmlFor="subjectLevel">Subject Level</label>
            <select id="subjectLevel" name="subjectLevel" onChange={(e) => setSubjectLevel(e.target.value)} required>
              <option value="">Select</option>
              <option value="OLevel">OLevel</option>
              <option value="AS">AS</option>
              <option value="A2">A2</option>
            </select>

            <label htmlFor="subjectBoard">Subject Board</label>
            <select id="subjectBoard" name="subjectBoard" onChange={(e) => setSubjectBoard(e.target.value)} required>
              <option value="">Select</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Edexcel">Edexcel</option>
              <option value="OxfordAQA">Oxford AQA</option>
            </select>

            <label htmlFor="teacherName">Teacher Name</label>
            <input type="text" id="teacherName" name="teacherName" onChange={(e) => setTeacherName(e.target.value)} required />

            <label htmlFor="session">Session</label>
            <select id="session" name="session" onChange={(e) => setSession(e.target.value)} required>
              <option value="">Select</option>
              <option value="Jan">Jan</option>
              <option value="June">June</option>
              <option value="November">November</option>
            </select>

            <label htmlFor="yearBought">Year Bought</label>
            <input type="text" id="yearBought" name="yearBought" pattern="[0-9]{4}" onChange={(e) => setYearBought(e.target.value)} required />

            <label htmlFor="condition">Condition</label>
            <select id="condition" name="condition" onChange={(e) => setCondition(e.target.value)} required>
              <option value="">Select</option>
              <option value="new">New</option>
              <option value="usedNotWritten">Used but not written in</option>
              <option value="usedWritten">Used and written in</option>
            </select>

            <div className="MarkingSchemeCheck">
                <label htmlFor="markingSchemeIncluded">Marking Scheme Included</label>
                <input
                type="checkbox"
                id="markingSchemeIncluded"
                name="markingSchemeIncluded"
                checked={markingSchemeIncluded}
                onChange={() => setMarkingSchemeIncluded(!markingSchemeIncluded)}
                />
            </div>

            {/* Additional fields for file upload */}
          </>
        )}
        {listingType === 'teacherClassified' && (
          <>
            {/* Similar to teacherNotes with additional fields for condition and marking scheme */}
            <label htmlFor="condition">Condition</label>
            <select id="condition" name="condition" onChange={(e) => setCondition(e.target.value)} required>
              <option value="">Select</option>
              <option value="new">New</option>
              <option value="usedHalfSolved">Used (half solved)</option>
              <option value="fullySolved">Fully solved</option>
            </select>

            <div className="MarkingSchemeCheck">
                <label htmlFor="markingSchemeIncluded">Marking Scheme Included</label>
                <input
                type="checkbox"
                id="markingSchemeIncluded"
                name="markingSchemeIncluded"
                checked={markingSchemeIncluded}
                onChange={() => setMarkingSchemeIncluded(!markingSchemeIncluded)}
                />
            </div>

            {/* Additional fields for file upload */}
          </>
        )}

        {listingType === 'pastPapers' && (
          <>
            {/* Fields for subject, subject level, subject board, year of the first exam, 
                year of the last exam, condition, and marking scheme */}
            <label htmlFor="condition">Condition</label>
            <select id="condition" name="condition" onChange={(e) => setCondition(e.target.value)} required>
              <option value="">Select</option>
              <option value="new">New</option>
              <option value="usedHalfSolved">Used (half solved)</option>
              <option value="fullySolved">Fully solved</option>
            </select>
            <div className="MarkingSchemeCheck">
                <label htmlFor="markingSchemeIncluded">Marking Scheme Included</label>
                <input
                type="checkbox"
                id="markingSchemeIncluded"
                name="markingSchemeIncluded"
                checked={markingSchemeIncluded}
                onChange={() => setMarkingSchemeIncluded(!markingSchemeIncluded)}
                />
            </div>
          </>
        )}
        <label for="images" class="drop-container" id="dropcontainer">
        <span class="drop-title">Click to add Pictures</span>
        <input type="file" id="images" accept="image/*" required/>
        </label>
        <button type="submit">List Book</button>
      </form>
    </div>
  );
};

export default NewListingPage;
