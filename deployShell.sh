gcloud functions deploy gcloud-function-review-summary \
  --gen2 \
  --region=us-central1 \
  --runtime=nodejs20 \
  --source=. \
  --entry-point=review-summary \
  --trigger-http \
  --allow-unauthenticated \
  --env-vars-file ../env.yaml