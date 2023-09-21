
# iot 数据传输协议

Iot世界三个重要的数据传输协议: MQTT，OPC-UA, Kafaka。这篇文章阐述了他们三个的区别。

- MQTT: 是通用的物联网协议，它比较简单,基本没有业务定义

- OPC-UA:用于定义复杂的工业生产环境下的协议，它有很多业务定义

- Kafaka: 用于传输大量stream数据。

当使用网络传输时，它们都建立在tcp协议之上，它们都是应用层协议。

当然还有其它应用层协议: 如web 协议，Http websocket等，但它们都不专业适配物联网场景，web协议太沉了。
还有跟硬件直接相关的modbus协议，它只用作相邻硬件之间的交互，非常轻量。

[OPC-UA, MQTT, and Apache Kafka: The Trinity of Data Streaming in IoT](https://dzone.com/articles/opc-ua-mqtt-and-apache-kafka-the-trinity-of-data-s)
