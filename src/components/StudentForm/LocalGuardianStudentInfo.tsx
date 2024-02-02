import { Col, Row } from "antd";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";

const LocalGuardianStudentInfo = () => {
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
        {/* Name */}
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
              name="student.localGuardian.name"
              label="Name"
              size="large"
              placeHolder="Enter Name"
            />
          </div>
        </Col>
        {/* Contact.No */}
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
              name="student.localGuardian.ContactNo"
              label="Contact Number"
              size="large"
              placeHolder="Contact Number"
            />
          </div>
        </Col>
        {/* occupation */}
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
              name="student.localGuardian.Occupation"
              label="Occupation"
              size="large"
              placeHolder="Occupation"
            />
          </div>
        </Col>
        {/* Address */}
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
              name="student.localGuardian.address"
              label="Address"
              placeHolder="Enter Address"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LocalGuardianStudentInfo;
