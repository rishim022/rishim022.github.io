const pipeline=[
  {id:'ingest',label:'Ingest',tools:['Fivetran','Airbyte','Hevo','Stitch'],desc:'Replicate data from source systems into the lake and warehouse.'},
  {id:'orchestrate',label:'Orchestrate',tools:['Apache Airflow','AWS MWAA','Astronomer Cosmos'],desc:'Schedule and coordinate every pipeline dependency.'},
  {id:'warehouse',label:'Warehouse',tools:['Amazon Redshift','BigQuery','PostgreSQL','Snowflake'],desc:'Durable, queryable storage for raw and modeled data.'},
  {id:'model',label:'Model',tools:['dbt Core','dbt Cloud','SQL','Python'],desc:'Transform raw data into tested, documented, trustworthy tables via dbt Core/Cloud against Redshift and BigQuery connectors.'},
  {id:'semantic',label:'Semantic Layer',tools:['LookML','Cube'],desc:'Governed metrics and shared definitions — one source of truth.'},
  {id:'ai',label:'AI & API',tools:['MCP','FastAPI','Claude','Text-to-SQL'],desc:'Natural-language and programmatic access to governed metrics.'},
  {id:'serve',label:'Self-Serve Analytics',tools:['Looker','Tableau','Metabase','Power BI'],desc:'Dashboards and exploration for every stakeholder.'}
];
const skillGroups=pipeline.map(({id,label,tools})=>({stage:id,label,items:tools}));
const experience=[['JS','Juniper Square','Senior Analytics Engineer','Feb 2026 — Present',['LookML','dbt','Looker','Amazon Redshift','AWS S3','Apache Airflow'],['Partner with Product, Data Platform, and Client Success on engagement, activation, and retention metrics.','Design LookML semantic models, dbt transformations, Explores, and dashboards.','Own event tracking plans and metric governance for key platform workflows.','Build dimensional models and SQL-driven analytics across user and account data.']],['JA','Jiva Ag','Data Analyst','Aug 2022 — Aug 2025',['dbt','Apache Airflow','Amazon Redshift','Fivetran','Mixpanel','CleverTap'],['Built analytics systems and metric frameworks from scratch.','Established event tracking plans across engagement, churn, and drop-off analysis.','Developed a Python SARIMAX model and Flask app for Feedmill price forecasting.','Built Metabase and Looker dashboards for business, operations, product, and design.','Designed dimensional models and a semantic layer for governed reporting.']],['MG','MoneyGram','Data Insights Analyst II','Feb 2021 — Jul 2022',['BigQuery','GCP','LookML','Fivetran','Looker'],['Developed KPIs, dashboards, and insights from a GCP-hosted warehouse.','Optimized SQL for customer segmentation, campaign performance, loyalty, and subscriptions.','Built cohort, retention, churn, and lifetime-value analyses.','Designed GCP data models and automated dashboards, and trained Looker users.']],['HF','Harvest','Data Application Analyst','Sep 2020 — Dec 2020',['SQL','SSRS','Power BI','Excel'],['Cleaned and transformed data feeds from multiple applications.','Developed reporting workflows with SQL stored procedures, functions, and SSRS.','Produced asset valuation and customer-growth reporting in Power BI.','Built master distribution reports for funds liquidity and distributions.']],['TCS','Tata Consultancy Services','System Engineer','Jun 2016 — Jul 2019',['SQL','Python','Tableau','SSIS','SSRS'],['Led work across data modeling, acquisition, reporting, and product support.','Built Tableau KPI dashboards for global SLA and OLA compliance.','Performed Python analysis to support data-driven decisions.','Created executive consumer-banking reporting and SQL-based environments.','Maintained database objects, reporting procedures, and pipeline automation.']]];
const gh=repo=>({href:`https://github.com/rishim022/${repo}`,target:'_blank',rel:'noreferrer'});
const projects=[['Customer Analytics Platform',['Airbyte','Redshift','dbt','Cube','FastAPI'],'A governed customer-analytics platform spanning ingestion through a Cube semantic layer and a natural-language query API.',gh('customer-analytics-platform')],['Rental Analytics',['SQL','BigQuery','Looker'],'A decision layer for rental performance, market signals, and operational opportunity.',gh('rental_analytics')],['Dash Forecasting',['Python','SARIMAX','Time Series'],'Feedmill business forecasting powered by a SARIMAX time-series model.',gh('dash_app_forecasting')],['dbt Project',['dbt','Apache Iceberg','Looker','BigQuery','SQL'],'Semantic-layer patterns, event models, and reusable dbt transformations for governed analytics.',gh('dbt_project')],['Mall Customer Segmentation',['Python','KMeans','BigQuery','GCP'],'Customer segmentation based on behavioural, demographic, and purchasing patterns.',gh('Mall-Customers-Segmentation')],['Europe Hotel Reviews Sentiment Analysis',['Python','NLP','Sentiment Analysis'],'TripAdvisor review analysis paired with a content-based recommendation approach.',gh('EuropeHotelReviewsSentimentAnalysis')],['Rotten Tomatoes Movie Review Analysis',['Python','Machine Learning','NLP'],'Exploring movie-review patterns and natural-language sentiment signals.',gh('Rotten_Tomatoes_MovieReview')]];
const projectDetails={
  'Customer Analytics Platform':['Customer, billing, support, and product-usage data lived in separate systems with no unified view.','Built an end-to-end pipeline — Airbyte ingestion into S3/Redshift, layered dbt marts, a Cube semantic layer, and a FastAPI text-to-SQL interface over governed metrics.'],
  'Rental Analytics':['Rental signals were fragmented across operational data.','Created a modeled SQL, BigQuery, and Looker decision layer.'],
  'Dash Forecasting':['Business forecasting needed a repeatable analytical approach.','Applied Python SARIMAX time-series forecasting for Feedmill pricing.'],
  'dbt Project':['Teams needed a governed, reusable metric foundation.','Built dbt transformations, event models, and semantic-layer patterns.'],
  'Mall Customer Segmentation':['Customer behaviour needed actionable segmentation.','Applied Python KMeans on BigQuery and GCP-backed data.'],
  'Europe Hotel Reviews Sentiment Analysis':['Unstructured reviews obscured customer experience signals.','Applied Python NLP and sentiment analysis to review data.'],
  'Rotten Tomatoes Movie Review Analysis':['Large review sets required structured sentiment exploration.','Used Python, machine learning, and NLP for review analysis.']
};
const certs=[['AS','Apache Airflow 3 Fundamentals','Astronomer','Data Engineering','https://www.credly.com/badges/f2a6110f-c1ff-46a2-ba3f-2c6c6b3cced1'],['AS','Astronomer Certification DAG Authoring for Apache Airflow 3','Astronomer','Data Engineering','https://www.credly.com/earner/earned/badge/a8d14d41-c7c7-45e6-969d-1a637571ac8b'],['DB','Databricks Fundamentals','Databricks','Lakehouse / Data Engineering','https://credentials.databricks.com/dc60489c-217a-4640-ae40-1c25854da3ea'],['MS','Microsoft Certified: Azure Data Scientist Associate','Microsoft','Machine Learning','https://learn.microsoft.com/api/credentials/share/en-us/RishiMukherjee-0509/A085E288A17BC5E0?sharingId'],['DC','Data Engineer Associate','DataCamp','Data Engineering','https://www.datacamp.com/certificate/DEA0018507950818'],['GA','Advanced Google Analytics','Google','Digital Analytics','https://drive.google.com/file/d/14vJb-6rfrkzyQ-pVqMj5n01CkUzr_o73/view?usp=sharing'],['SAP','SAP BW on HANA','SAP','Enterprise Data Warehousing','']];

// --- Hero pipeline graph ---
const pipelineGraph=document.querySelector('.pipeline-graph');
pipelineGraph.innerHTML=pipeline.map((n,i)=>`<button type="button" class="pipeline-node" data-stage="${n.id}" style="--i:${i}" aria-label="${n.label}: ${n.tools.join(', ')}"><span class="node-dot"></span><span class="node-label">${n.label}</span><span class="node-tools">${n.tools.join(' · ')}</span><span class="node-tip" role="tooltip">${n.desc}</span></button>`).join('<i class="pipeline-edge"><em></em><em></em></i>');

// --- Skills (grouped by pipeline stage, filterable) ---
const skillsGrid=document.querySelector('#skills-grid');
const skillsFilters=document.querySelector('#skills-filters');
skillsFilters.innerHTML=['all',...skillGroups.map(g=>g.stage)].map(stage=>{
  const label=stage==='all'?'All':skillGroups.find(g=>g.stage===stage).label;
  return `<button type="button" class="chip" data-stage="${stage}" aria-pressed="${stage==='all'}">${label}</button>`;
}).join('');
function renderSkills(activeStage){
  const groups=activeStage==='all'?skillGroups:skillGroups.filter(g=>g.stage===activeStage);
  skillsGrid.innerHTML=groups.map(g=>`<div class="skill-group"><h3>${g.label}</h3><div class="skill-group-items">${g.items.map(n=>`<span class="skill-tag">${n}</span>`).join('')}</div></div>`).join('');
  skillsFilters.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.stage===activeStage));
}
renderSkills('all');
skillsFilters.addEventListener('click',e=>{const chip=e.target.closest('.chip');if(chip)renderSkills(chip.dataset.stage)});
pipelineGraph.addEventListener('click',e=>{
  const node=e.target.closest('.pipeline-node');
  if(!node)return;
  renderSkills(node.dataset.stage);
  document.querySelector('#skills').scrollIntoView({behavior:'smooth',block:'start'});
});

// --- Career timeline (with expandable achievements) ---
document.querySelector('#experience-timeline').innerHTML=experience.map(([logo,company,title,duration,tech,achievements])=>{
  const visible=achievements.slice(0,4),rest=achievements.slice(4);
  return `<li class="career-item reveal"><i class="career-dot"></i><article class="career-card"><div class="career-top"><span class="company-logo" aria-label="${company} monogram">${logo}</span><div><h3>${company} <em>/ ${title}</em></h3></div><span class="career-duration">${duration}</span></div><div class="career-tech">${tech.map(x=>`<span>${x}</span>`).join('')}</div><ul class="career-achievements">${visible.map(x=>`<li>${x}</li>`).join('')}${rest.length?`<li class="career-more-items" hidden>${rest.map(x=>`<span>${x}</span>`).join('')}</li>`:''}</ul>${rest.length?`<button type="button" class="career-toggle" data-open="false">Show ${rest.length} more ↓</button>`:''}</article></li>`;
}).join('');
document.querySelectorAll('.career-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.career-card'),moreLi=card.querySelector('.career-more-items'),open=btn.dataset.open==='true';
    if(!open){
      moreLi.querySelectorAll('span').forEach(s=>{const li=document.createElement('li');li.textContent=s.textContent;moreLi.parentElement.insertBefore(li,moreLi)});
      moreLi.remove();
      btn.remove();
    }
  });
});

// --- Projects (filterable by tag) ---
const projectGrid=document.querySelector('#project-grid');
const projectFilters=document.querySelector('#project-filters');
const allTags=[...new Set(projects.flatMap(p=>p[1]))].sort();
projectFilters.innerHTML=['All',...allTags].map(tag=>`<button type="button" class="chip" data-tag="${tag}" aria-pressed="${tag==='All'}">${tag}</button>`).join('');
function renderProjects(activeTag){
  const list=activeTag==='All'?projects:projects.filter(([,tags])=>tags.includes(activeTag));
  projectGrid.innerHTML=list.map(([n,t,o,link])=>{
    const detail=projectDetails[n];
    const story=detail?`<div class="project-story"><p><b>PROBLEM</b>${detail[0]}</p><p><b>SOLUTION</b>${detail[1]}</p><p><b>OUTCOME</b>${o}</p></div>`:`<p class="project-outcome">${o}</p>`;
    const titleHtml=link?`<a href="${link.href}" target="${link.target}" rel="${link.rel}">${n} ↗</a>`:n;
    return `<article class="project reveal in"><span class="project-num">${n}</span><div><h3>${titleHtml}</h3>${story}<div class="project-tech">${t.map(x=>`<span>${x}</span>`).join('')}</div></div></article>`;
  }).join('');
  projectFilters.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.tag===activeTag));
}
renderProjects('All');
projectFilters.addEventListener('click',e=>{const chip=e.target.closest('.chip');if(chip)renderProjects(chip.dataset.tag)});

// --- Certifications ---
document.querySelector('.cert-card-grid').innerHTML=certs.map(([logo,name,issuer,category,url])=>`<article class="reveal"><div class="cert-brand"><span class="cert-logo">${logo}</span><span class="verified">${url?'● VERIFIED':'● ISSUER LISTED'}</span></div><h3>${name}</h3><p>${issuer}</p><small class="cert-category">${category}</small>${url?`<a class="credential-link" href="${url}" target="_blank" rel="noreferrer">View credential ↗</a>`:'<span class="credential-link">Credential on request</span>'}</article>`).join('');

// --- Chrome: year, theme, reveal-on-scroll, cursor glow ---
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toggle=document.querySelector('.theme-toggle'),stored=localStorage.getItem('theme');
if(stored==='light')document.body.classList.add('light');
toggle.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark')});
const glow=document.querySelector('.cursor-glow');
let pointer,frame;
const pipelineCard=document.querySelector('.pipeline-card');
const paintPointer=()=>{
  frame=0;
  if(!pointer)return;
  glow.style.transform=`translate3d(${pointer.x}px,${pointer.y}px,0) translate(-50%,-50%)`;
  if(pointer.card)pipelineCard.style.transform=`rotateX(${pointer.ry}deg) rotateY(${pointer.rx}deg)`;
};
window.addEventListener('pointermove',e=>{
  const b=pipelineCard.getBoundingClientRect(),inside=e.target.closest('.pipeline-card');
  pointer={x:e.clientX,y:e.clientY,card:inside,rx:inside?(e.clientX-b.left-b.width/2)/22:0,ry:inside?(e.clientY-b.top-b.height/2)/-22:0};
  if(!frame)frame=requestAnimationFrame(paintPointer);
},{passive:true});
pipelineCard.addEventListener('pointerleave',()=>pipelineCard.style.transform='');
