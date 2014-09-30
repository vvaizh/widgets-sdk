Widget PubSub
================

Description
---------------------
Widgets intercommunication sample.
Pubsub feature demonstration.

Purpose
---------------------
Show basic communication between two widgets via pubsub feature

Behavior
---------------------
1.pubsub-publisher widget publishes pubsub topic
2.pubsub-subscriber widget subscribes to topic and performs actions on message receive

Usage
---------------------
1. Make demo HTML page with two iframes A and B
2.  Provide widget `pubsub-publisher.xml` URL as argument to widget rendering system in browser
2.1 Ensure that widget rendered successfully
2.2 Provide resulted URL as src for iframe A
3.  Provide widget `pubsub-subscriber.xml` URL as argument to widget rendering system in browser
3.1 Ensure that widget rendered successfully
3.2 Provide resulted URL as src for iframe B
4. Open your demo page URL in browser 
5.@TODO continue in result


Path to widget publisher
---------------------
`src/main/webapp/pubsub-publisher.xml`

Path to widget subscriber
---------------------
`src/main/webapp/pubsub-subscriber.xml`


Troubleshooting
---------------------
1. Check widget rendering system availability and IsAlives (if applicable) 
2. Check widget widget URL direct access in browser - raw XML should be displayed
3. Check iframes rendered successfully
4. Check browser developer tools console for errors/warnings