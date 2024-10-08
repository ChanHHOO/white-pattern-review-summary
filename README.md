# 🚀 Review summary for white pattern

**Elevator Pitch:** Save your time by checking out the summarized reviews!

---

## 🌟 Inspiration

Additionally, while most users consider reviews important, they cannot go through all of them. So we serve the summary of product reviews.

---

## 🛠️ Features

- **Feature**: Summarize product reviews with Gemini API and Firebase.

---

## 🎯 How It Works

- Firebase Realtime Database or Firestore will be used to store user-submitted product reviews. These reviews could include textual data and ratings to the product (Reviews are stored in a structured format)

- Multimodal Analysis with Gemini API(Firebase Extension)  
   Text Analysis: Process reviews from Firestore to extract key themes, sentiments, and specific mentions of product features or issues.
- Steps for Analysis:
  1.  Extract raw review data from Firestore.
  2.  Send textual to the Gemini API for processing.
  3.  Receive analysis results, including sentiment scores, key phrases, and visual insights.

---

## 🛠️ Tech Stack

**Node.js**  
**Firebase**  
**Gemini API**  
**Multimodal Analysis with Gemini API(Firebase Extension)**

---

## 🚀 Getting Started

### Prerequisites

List any prerequisites for your project.

```bash
# Example
Node.js >= 20
npm >= 10.8.2
gcloud
```

## Test Instruction

**glcoud login**

```
gcloud auth login
```

**Set up .env.yaml**

> You should convert to "../env.yaml" from "./env.yaml.sample" and set all of the values.

**Run script**

> sh deployShell.sh
