<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  GestureSpeak - AI-Powered ASL Hand Gesture Detection
</h1>

GestureSpeak is an innovative AI-powered application that bridges communication gaps by translating hand poses into the American Sign Language (ASL) alphabet. Powered by TensorFlow.js and its Handpose model, GestureSpeak detects hand movements and interprets them into meaningful gestures. By leveraging the Fingerpose library, it classifies custom hand gestures with precision, making communication more inclusive and accessible.

`#ASLRecognition` `#TensorFlowJS` `#AccessibilityInnovation`

# Installation

1. **Clone the repository**

```shell
# copy the repo to your machine

git clone https://github.com/fazaulfath/American_Sign_Language.git
```

2. **Start the project**

```shell
# move to the project folder and install all dependencies

cd ASL
yarn install
```

3. **Run the project on your local machine**

```shell
# run Next

yarn dev
```

4. **The project is live 🚀**

Your project is live and running at `http://localhost:3000`

You can edit the core program at `/pages/index.js`

# What's inside the project

## Extract the fingerpose data

uncomment the `<pre>` component

```js
<Image h="150px" objectFit="cover" id='emojimage'/>

// uncomment this
{/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}

</Container>
```

uncomment the `estimatedGestures` data to change `'.pose-data'` innerHTML

```js
// document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);
```

the `estimatedGestures` data will render on your screen.

# References & Libraries

- [TensorFlow JS](https://www.tensorflow.org/js) – A powerful library that allows you to run machine learning models directly in the browser with JavaScript, offering great flexibility and speed.

- [Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) – A lightweight machine learning model that detects hand positions and tracks finger movements, enabling efficient gesture recognition.

- [Fingerpose](https://github.com/andypotato/fingerpose) – A pose classifier for interpreting hand landmarks detected by TensorFlow.js Handpose, perfect for recognizing custom gestures.

- Sign language illustrations are graciously provided by [Pelin Kahraman](https://thenounproject.com/pelodrome/).

# For those eager to learn more about TensorFlow.js and custom gesture recognition, here are some insightful video resources:

- [Machine Learning with TensorFlow in JavaScript](https://www.youtube.com/watch?v=WIHZ7kjJ35o) – A comprehensive introduction to TensorFlow.js, presented by [Jason Lengstorf](https://github.com/jlengstorf) and [Jason Mayes](https://github.com/jasonmayes).

- [Building a Real-Time Sign Language Detection App with React.js & TensorFlow.js](https://www.youtube.com/watch?v=ZTSRZt04JkY) – A practical guide to creating a live sign language detection app, shared by [Nicholas Renotte](https://github.com/nicknochnack).

<!-- AUTO-GENERATED-CONTENT:END -->
