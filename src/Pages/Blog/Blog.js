import React from 'react';

const Blog = () => {
  return (
    <div className='mb-32'>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5 mt-10 rounded-2xl">
        {/* -------- */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold ">
            <p className=" p-4 "> Q: What is Cors?</p>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
        </div>

        {/* -------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
            <p className=" p-4 ">
              Q: Why are you using firebase? What other options do you have to
              implement authentication?
            </p>
          </div>
          <div className="collapse-content">
            <p>
              Firebase is, essentially, a key-value store that you can use to
              quickly prototype and run a simple application, either native
              mobile or in-browser javascript. They include all the
              authentication stuff and website hosting, so it takes away a lot
              of the pain of getting started and allows you to get something up
              and running really quickly. I haven’t played with it very much,
              but from what I’ve seen and heard it is a fantastic product!
            </p><br/>
            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
          </div>
        </div>

        {/* -------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
            <p className=" p-4 ">Q: How does the private route work?</p>
          </div>
          <div className="collapse-content">
            <p>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
          </div>
        </div>

        {/* ----------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold ">
            <p className=" p-4 "> Q: What is Node? How does Node work?</p>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
            </p>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
