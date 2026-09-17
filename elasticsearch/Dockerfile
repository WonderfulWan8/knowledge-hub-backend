# Elasticsearch base image.
FROM elasticsearch:8.17.0

# Keep the IK plugin version aligned with Elasticsearch.
RUN elasticsearch-plugin install --batch \
    https://release.infinilabs.com/analysis-ik/stable/elasticsearch-analysis-ik-8.17.0.zip
