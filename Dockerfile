# Use lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy all website files into Nginx web root
COPY . /usr/share/nginx/html

# Rename main HTML file to index.html so Nginx serves it
RUN mv /usr/share/nginx/html/coffee.html /usr/share/nginx/html/index.html

# Fix permissions to avoid 403 Forbidden
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

