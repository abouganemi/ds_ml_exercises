# **Video Game Sales Analysis - Data Science & Machine Learning Project**

## **Overview**

This project is focused on analyzing **video game sales data** using **Data Science (DS) and Machine Learning (ML)** techniques. The objective is to explore historical sales patterns, understand genre and platform trends, and build predictive models for sales performance.

The project follows a **question-driven approach**, where an AI-generated **set of 20 questions** guides the learning process across different aspects of DS/ML, covering:

- **Exploratory Data Analysis (EDA)**
- **Feature Engineering**
- **Regression & Classification Models**
- **Data Imbalance Handling**
- **Machine Learning Model Evaluation & Optimization**

This project is part of a **self-directed learning initiative**, leveraging AI for **hints, optimizations, and debugging** while ensuring **independent problem-solving**.

---

## **Dataset**

The dataset used for this project contains:

### **Video Games Sales**

- **Video game sales data across multiple platforms and regions.**
- **Key columns include**:
  - `Name` (Game title)
  - `Platform` (e.g., PS2, Xbox, Wii)
  - `Year` (Release year)
  - `Genre` (Action, RPG, Sports, etc.)
  - `Publisher`
  - `NA_Sales`, `EU_Sales`, `JP_Sales`, `Other_Sales` (Regional sales in millions)
  - `Global_Sales` (Total sales worldwide)
  - **Engineered Features:** `Platform Category`, `Sales Category`, `Regional Sales Ratios`
  
The dataset was sourced from [**Kaggle**](https://www.kaggle.com/datasets/willianoliveiragibin/video-game-sales-analyze/data) and cleaned for analysis.

### **Inflation Data**

To analyze the relationship between **inflation rates and video game sales**, this project integrates an **external time series dataset** containing annual inflation rates.

- It includes various inflation measures such as:
  - **Headline Consumer Price Index (HCPI) Inflation**
  - **Food Price Inflation**
  - **Energy Price Inflation**
  - **GDP Deflator Growth Rate**

- **Key columns include**:
  - `Year` – Corresponding year of inflation data.
  - `HCPI_AE_AVE` – **Advanced Economy (AE) Inflation** (Used for North America).
  - `HCPI_ECA_MED` – **Europe & Central Asia (ECA) Inflation** (Used for EU region).
  - `HCPI_AE_AVE` (Repeated) – Used for Japan, as Japan is classified under Advanced Economies.
  - `HCPI_GLOBAL_AVE_GDP` – **Global GDP-Weighted Inflation** (Used for global correlation analysis).

The dataset was sourced from [**The World Bank**](https://www.worldbank.org/en/research/brief/inflation-database) and cleaned for analysis.

---

## **Project Structure**

The project is structured into different levels, progressively covering **data analysis, feature engineering, modeling, and evaluation**.

### **📌 Level 1: Exploratory Data Analysis (EDA)**

1. How many unique platforms and genres are present in the dataset?
2. What are the top 5 most common publishers and genres by game count?
3. Find the average and median global sales across all platforms.
4. Which year had the highest number of game releases, and how many games were released that year?
5. Plot a bar chart of total global sales by genre.

### **📌 Level 2: Data Aggregation & Statistical Summary**

6. What are the top 10 games by global sales?
7. What is the average sales per year globally across all platforms?
8. Create a scatter plot of NA_Sales vs. EU_Sales. What pattern, if any, can you observe?
9. Find the platform with the highest total sales globally. Which game contributed the most to these sales?
10. Compute the correlation between global sales and regional sales (NA, EU, JP, etc.).

### **📌 Level 3: Machine Learning Models & Feature Engineering**

11. Perform linear regression to predict Global_Sales using NA_Sales and EU_Sales as predictors.
12. Perform feature scaling on the sales columns and train a k-means clustering model to group games into clusters based on regional sales.
13. Which cluster has the games with the highest sales, and what is the general genre distribution within that cluster?
14. Compute the rolling average of yearly sales and identify any trends or spikes.
15. Use the merge_asof() method to combine the yearly sales data with an external time series dataset (like inflation rates) and analyze any relationships.

### **📌 Level 4: Advanced Analytics & Model Optimization**

16. Generate a heatmap showing the correlation between platforms, genres, and regional sales.
17. Identify genres with the highest variance in sales across regions using standard deviation.
18. Train a classification model to predict a game's sales category (High, Medium, Low) based on regional sales.
19. Build a predictive model to classify whether a game will have high or low global sales using logistic regression.
20. Analyze outliers in the dataset using the IQR (interquartile range) method and visualize the top 10 outliers.

Each stage is **self-implemented first** before reviewing **AI-assisted optimizations**.

---

## **Methodology**

This project follows a structured **question-driven workflow**, ensuring a **systematic learning process**:

1. **Dataset Exploration & Cleaning**  
   - Handle missing values.
   - Feature engineering (e.g., platform categories, sales ratios).

2. **Exploratory Data Analysis (EDA)**
   - Identify trends, correlations, and sales distributions.
   - Visualizations using **Seaborn & Matplotlib**.

3. **Feature Engineering & Transformation**
   - Convert `Platform` & `Genre` into **numerical encodings**.
   - Engineer **sales category labels**.

4. **Machine Learning Models**
   - **Regression (Linear Regression)**
   - **Clustering (K-Means)**
   - **Classification (Logistic Regression, Random Forest, SMOTE for imbalance handling)**

5. **Model Evaluation & Interpretation**
   - **Confusion Matrices & Accuracy Scores**.
   - **Precision, Recall, F1-score Analysis**.
   - **Hyperparameter tuning & alternative models**.

---

## **Results & Insights**

Key findings from the analysis include:

- **Sales trends:** Peak sales occurred in **2006-2008**, with a decline in later years.
- **Regional differences:** **NA and EU dominate game sales**, while **JP sales are lower but influential in RPG genres**.
- **Machine Learning insights:**
  - **Linear regression was highly effective in predicting sales.**
  - **K-Means clustering identified 3 distinct sales patterns.**
  - **Logistic regression worked well after addressing data imbalance with SMOTE.**
- **Impact of Inflation on Sales:** Inflation spikes **negatively correlated with high sales periods**.

The complete analysis, including **notebooks, models, and visualizations**, is available in this repository.
