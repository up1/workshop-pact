FROM pactfoundation/pact-broker
USER root
RUN apk add --no-cache netcat-openbsd
COPY ./wait-for.sh /app/wait-for.sh
CMD sh /app/wait-for.sh postgres:5432 -- /pact_broker/entrypoint.sh config.ru