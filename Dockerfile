FROM node:10.14.2-jessie

WORKDIR /app

COPY . /app

RUN mkdir -p /usr/share/fonts/opentype/noto/ \
  && mv vendor/NotoSansCJKsc-hinted/*.otf /usr/share/fonts/opentype/noto/ \
  && fc-cache -f \
  && yarn

EXPOSE 3000

CMD yarn start
