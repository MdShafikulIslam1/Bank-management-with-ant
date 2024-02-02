"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Form/FormInput";
import FormSelectField from "../Form/FormSelectField";
import {
  academicDepartmentOptions,
  academicFacultyOptions,
  genderOptions,
  managementDepartmentOptions,
} from "@/constant/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "2px solid #d9d9d9",
        borderRadius: "5px",
        marginTop: "10px",
        padding: "15px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* FName */}
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="text"
              name="student.name.firstName"
              label="First Name"
              size="large"
              placeHolder="Enter your Name"
            />
          </div>
        </Col>
        {/* MName */}
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="text"
              name="student.name.middleName"
              label="Middle Name"
              size="large"
              placeHolder="Enter your Name"
            />
          </div>
        </Col>
        {/* LName */}
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="text"
              name="student.name.lastName"
              label="Last Name"
              size="large"
              placeHolder="Enter your Name"
            />
          </div>
        </Col>
        {/* Password */}
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <div>
            <FormInput
              type="password"
              name="password"
              label="Password"
              size="large"
              placeHolder="Enter Password"
            />
          </div>
        </Col>
        {/* Ac.Faculty */}
        <Col
          className="gutter-row"
          span={8}
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
              name="student.academicFaculty"
              label="Academic Faculty"
              size="large"
              placeHolder="Academic Faculty"
              options={academicFacultyOptions}
            />
          </div>
        </Col>
        {/* Ac.Department */}
        <Col
          className="gutter-row"
          span={8}
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
              name="student.academicDepartment"
              label="Academic Department"
              size="large"
              placeHolder="Academic Department"
              options={academicDepartmentOptions}
            />
          </div>
        </Col>
        {/* Ac.Semester */}
        <Col
          className="gutter-row"
          span={8}
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
              name="student.academicSemester"
              label="Academic Semester"
              size="large"
              placeHolder="Academic Semester"
              options={academicDepartmentOptions}
            />
          </div>
        </Col>
        {/* Gender */}
        <Col
          className="gutter-row"
          span={8}
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
              name="student.gender"
              label="Gender"
              size="large"
              placeHolder="select gender"
              options={genderOptions}
            />
          </div>
        </Col>
        {/* upload Image */}
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <UploadImage />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
