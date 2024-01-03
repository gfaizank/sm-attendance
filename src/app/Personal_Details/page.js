import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Button from "@mui/material/Button";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from '@mui/material/TextField';
import axios from 'axios';

const PersonalDetails = () => {

  const [formData, setFormData] = useState({
    name: "Faizan Khan",
    number: "8765483471",
    emailAddress: "faizan.khan@secondmedic.com",
    dob: "",
    gender: "",
    maritalStatus: "",
    bloodGroup: "",
    currentAddress: "",
    permanentAddress: "",
    guardianName: "",
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactMobile: "",
    emergencyContactAddress: "",
  });

  const handleSaveDetails = () => {
    
    axios.post('http://your-backend-api-url/save-details', formData)
      .then(response => {
        console.log('Details saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving details:', error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      <div className="flex items-center p-3 bg-white sticky top-0 z-10">
        <ArrowBackOutlinedIcon className="font-bold" />
        <div className="ml-8 font-bold">Personal Details</div>
        <div className="ml-auto">
          <Button
            className="bg-[#07cba5] text-white"
            style={{ textTransform: "none" }}
          >
            <PictureAsPdfOutlinedIcon className="mr-1" />
            Biodata
          </Button>
        </div>
      </div>

      {/* Additional Content */}
      <div className="p-4">
        <p className="text-sm text-gray-400 text-left">Staff Name</p>
        <input
          className="bg-gray-200 mt-2 border border-gray-300 p-2 w-full relative"
          type="text"
          value="Faizan Khan"
          readOnly
        />
      </div>
      <div className="px-4">
        <p className="text-sm text-gray-400 text-left">Mobile Number</p>
        <div className="relative">
          <input
            className="bg-gray-200 mt-2 border border-gray-300 p-2 w-full"
            type="number"
            value="8765483471"
            readOnly
          />
        </div>
      </div>
      <div className="px-4">
        <p className="text-sm text-gray-400 text-left">Email Address</p>
        <div className="relative">
          <input
            className="bg-gray-200 mt-2 border border-gray-300 p-2 w-full"
            type="email"
            value="faizan.khan@secondmedic.com"
            readOnly
          />
        </div>
      </div>
      
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Date of Birth</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="DD/MM/YY"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Gender</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. Male"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Marital Status</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. Unmarried"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Blood Group</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. O+"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Current Address</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. XYZ Society, sector 101, Bhopal"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Permanent Address</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. XYZ Society, sector 101, Bhopal"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Guardian's Name</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="ge. Name"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Emergency Contact Name</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="Contact Name"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Emergency Contact Relationship</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. Father"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Emergency Contact Mobile</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="number"
            placeholder="1234567890"
          />
        </div>
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm text-gray-400 text-left">Emergency Contact Address</p>
        <div className="relative">
          <input
            className="bg-white mt-2 border border-gray-300 p-2 w-full"
            type="text"
            placeholder="eg. XYZ Society, sector 101, Bhopal"
          />
        </div>
      </div>
      <div className="px-8 mt-4 bg-white h-14">
        
      </div>



      
      <div className="bg-white p-2 fixed bottom-0 w-full flex justify-center">
        <Button
          className="bg-[#07cba5] text-white text-xl font-lg h-12 w-full"
          style={{ textTransform: "none" }}
          onClick={handleSaveDetails}
        >
          Save Details
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
