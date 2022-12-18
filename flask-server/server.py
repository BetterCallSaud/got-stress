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

        if stress_score > 0.6: result = f"Stress detected with a final score of {stress_score}"
        else: result = f"Stress unconfirmed (chances) with a final score of {stress_score}"

        return render_template("results.html", factorScore = round(f_score, 2), sentimentScore = round(sentiment_score, 2), stressScore = stress_score, fValues = f_values)

if __name__== "__main__":
    app.run(debug=True)