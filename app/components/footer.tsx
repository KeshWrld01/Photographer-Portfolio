'use client';

import React from 'react';
import Link from 'next/link';

const footer = () => {
  return (
    <>
    {/* ========== FOOTER ========== */}
    <footer className="container py-4">
      <div className="row align-items-md-center text-center text-md-start">
        <div className="col-md mb-3 mb-md-0">
          <p className="mb-0">© Space. 2021 Htmlstream.</p>
        </div>
        <div className="col-md d-md-flex justify-content-md-end">
          {/* Socials */}
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                href="#"
              >
                <i className="bi-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                href="#"
              >
                <i className="bi-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                href="#"
              >
                <i className="bi-github" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                href="#"
              >
                <i className="bi-slack" />
              </a>
            </li>
          </ul>
          {/* End Socials */}
        </div>
      </div>
    </footer>
    {/* ========== END FOOTER ========== */}
  </>
  
  );
};

export default footer;
