const projectDetails={
  'Multi-Document-RAG':['Complex document collections make reliable retrieval difficult.','Built a retrieval-augmented workflow using Python, vector search, and LLMs.'],
  'Rental Analytics':['Rental signals were fragmented across operational data.','Created a modeled SQL, BigQuery, and Looker decision layer.'],
  'Dash Forecasting':['Business forecasting needed a repeatable analytical approach.','Applied Python SARIMAX time-series forecasting for Feedmill pricing.'],
  'dbt Project':['Teams needed a governed, reusable metric foundation.','Built dbt transformations, event models, and semantic-layer patterns.'],
  'Mall Customer Segmentation':['Customer behaviour needed actionable segmentation.','Applied Python KMeans on BigQuery and GCP-backed data.'],
  'Europe Hotel Reviews Sentiment Analysis':['Unstructured reviews obscured customer experience signals.','Applied Python NLP and sentiment analysis to review data.'],
  'Rotten Tomatoes Movie Review Analysis':['Large review sets required structured sentiment exploration.','Used Python, machine learning, and NLP for review analysis.']
};
document.querySelectorAll('.project').forEach(card=>{const title=card.querySelector('h3')?.textContent,detail=projectDetails[title];if(!detail)return;const tech=card.querySelector('.project-tech');tech?.insertAdjacentHTML('beforebegin',`<div class="project-story"><p><b>PROBLEM</b>${detail[0]}</p><p><b>SOLUTION</b>${detail[1]}</p><p><b>OUTCOME</b>${card.querySelector('.project-outcome')?.textContent||''}</p></div>`)});
document.querySelectorAll('.company-logo').forEach((badge,i)=>{badge.setAttribute('title','Company monogram');badge.setAttribute('aria-label',`${badge.getAttribute('aria-label')||'Company'} badge`);badge.style.transitionDelay=`${i*35}ms`});
document.querySelectorAll('.cert-logo').forEach(logo=>logo.setAttribute('title','Provider badge'));
