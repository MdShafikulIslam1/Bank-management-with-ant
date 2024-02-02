import { Col, Row } from "antd";
import FormInput from "../Form/FormInput";
import FormDatePicker from "../Form/FormDatePicker";
import FormSelectField from "../Form/FormSelectField";
import { bloodGroupOptions } from "@/constant/global";
import FormTextArea from "../Form/FormTextArea";

const BasicStudentInfo = () => {
  return (
    <div
      style={{
        border: "2px solid #d9d9d9",
        borderRadius: "5px",
        margin: "10px",
        padding: "15px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* Email */}
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="email"
              name="student.email"
              label="Email"
              size="large"
              placeHolder="Enter your Email"
            />
          </div>
        </Col>
        {/* Contact No. */}
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="text"
              name="student.contactNo"
              label="Contact Number"
              size="large"
              placeHolder="Enter Contact Number"
            />
          </div>
        </Col>
        {/* Em.Contact.No */}
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="text"
              name="student.emergencyContactNo"
              label="Emergency Contact Number"
              size="large"
              placeHolder=" Emergency Contact Number"
            />
          </div>
        </Col>
        {/* Date of Birth */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <FormDatePicker name="student.dateOfBirth" label="Date of Birth" />
          </div>
        </Col>
        {/* Blood Group */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <FormSelectField
              name="student.bloodGroup"
              label="Blood Group"
              size="large"
              placeHolder="Enter Blood Group"
              options={bloodGroupOptions}
            />
          </div>
        </Col>
        {/* Present Address */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <FormTextArea
              name="student.presentAddress"
              label="Present Address"
              placeHolder="Enter Present Address"
            />
          </div>
        </Col>
        {/* Permanent Address */}
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <FormTextArea
              name="student.permanentAddress"
              label="Permanent Address"
              placeHolder="Enter Permanent Address"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BasicStudentInfo;
