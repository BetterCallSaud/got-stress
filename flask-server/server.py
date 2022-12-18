from flask import Flask, request, render_template
from flask_cors import cross_origin
from nltk.sentiment import SentimentIntensityAnalyzer
from statistics import mean

app = Flask(__name__)

@app.route("/generateResults", methods=["GET", "POST"])
@cross_origin()
def handleSubmit():
    if request.method == "POST":
        #* Retrieving values from form object and typecasting
        f_ids = [f"factor-{i}" for i in range(1,9)]
        f_values = [request.form[f_ids[i]] for i in range(8)]
        f_values = list(map(int, f_values))
        f_score = mean(f_values)/10

        #* Sentiment analyzer and retrieving compound polarity score
        sia = SentimentIntensityAnalyzer()

        #* Sentiment score is calculated from the mathematical model:
        #^ y = (1-x)/2
        sentiment_score = (1 - sia.polarity_scores(request.form["remarks"])['compound'])/2

        #* The final stress score is a mean of factor score and sentiment score
        stress_score = round((f_score + sentiment_score)/2, 2
        )

        if (stress_score >= 0 and stress_score < 0.3):
            emoji = "😄"
            meaning = "No stress at all!"
            comment = "You are living a healthy and stress-free lifestyle."
            suggestion = "Continue to maintain the current lifestyle."
        elif (stress_score >= 0.3 and stress_score < 0.5):
            emoji = "😀"
            meaning = "Stress detected at rare instants!"
            comment = "You are living a healthy life with minor stress."
            suggestion = "Continue to maintain the current lifestyle with the addition of taking out time for yourself to reflect and meditate."
        elif (stress_score >= 0.5 and stress_score < 0.7):
            emoji = "😐"
            meaning = "Medium stress detected!"
            comment = "Moderately healthy life with more frequent  stress."
            suggestion = "Lifestyle can be improved by the inclusion of activities such as meditation, exercises, and pursuing your hobbies and interests."
        elif (stress_score >= 0.7 and stress_score < 0.9):
            emoji = "😟"
            meaning = "Medium to high stress detected at higher levels of frequency!"
            comment = "You aren't living a healthy life  because of higher stress level."
            suggestion = "You should open up about problems with your friends and family and follow more recreational activities alongside meditation and exercise. You can seek professional help."
        elif (stress_score > 0.9 and stress_score <= 1):
            emoji = "😭"
            meaning = "Traumatic stress episodes detected with very high levels of frequency!"
            comment = "You are living a very unhealthy and stressful life."
            suggestion = "You MUST seek professional help as soon as possible and implement their suggestions. Spend more time with family and friends. You should also regularly track your progress."

        return render_template("results.html", factorScore = round(f_score, 2), sentimentScore = round(sentiment_score, 2), stressScore = stress_score, emoji = emoji, meaning = meaning, comment = comment, suggestion = suggestion)

if __name__== "__main__":
    app.run(debug=True)