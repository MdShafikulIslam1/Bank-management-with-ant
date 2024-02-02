import { Col, Row } from "antd";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";

const GuardianStudentInfo = () => {
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
        {/* fatherName */}
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
              name="student.guardian.fatherName"
              label="Father Name"
              size="large"
              placeHolder="your Father Name"
            />
          </div>
        </Col>
        {/* motherName */}
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
              name="student.guardian.motherName"
              label="Mother Name"
              size="large"
              placeHolder="Mother Name"
            />
          </div>
        </Col>
        {/* Father.Contact.No */}
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
              name="student.guardian.fatherContactNo"
              label="Father Contact Number"
              size="large"
              placeHolder="Contact Number"
            />
          </div>
        </Col>
        {/* mother contact no */}
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
              name="student.guardian.motherContactNo"
              label="Mother Contact Number"
              size="large"
              placeHolder="Contact Number"
            />
          </div>
        </Col>
        {/* Father occupation */}
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
              name="student.guardian.fatherOccupation"
              label="Father Occupation"
              size="large"
              placeHolder="Occupation"
            />
          </div>
        </Col>
        {/* Mother occupation */}
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
              name="student.guardian.motherOccupation"
              label="Mother Occupation"
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
              name="student.guardian.address"
              label="Address"
              placeHolder="Enter Address"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GuardianStudentInfo;
