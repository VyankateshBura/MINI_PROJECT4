import { useState, useRef } from "react";
const SignUpPage=()=> {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form >
        <h1 className="text-center mb-4" style={{ color: "white" }}>
          Profile
        </h1>
        <Form.Group controlId="avatarUrl">
          <Form.Label style={{ color: "white" }}>Avatar</Form.Label>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              cursor: "pointer",
              margin: "auto",
              
            }}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "gray",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                +
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label style={{ color: "white" }}>Username</Form.Label>
          <Form.Control
            style={{ color: "black", height: "43px" }}
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label style={{ color: "white" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Sign up
        </Button>
        <p className="mt-3" style={{ color: "white" }}>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpPage;