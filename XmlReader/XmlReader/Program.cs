using System;
using System.Linq;
using System.Xml;
using System.Xml.Linq;

namespace XmlReader
{
    class Program
    {
        static void Main(string[] args)
        {


            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load("c:\\file.xml");
            XmlNodeList nodeList = xmlDoc.DocumentElement.SelectNodes("/info/area/geocode");
            foreach (XmlNode node in nodeList)
            {
                string code = node.SelectSingleNode("value").InnerText;
                Console.WriteLine(code);
            }

            Console.WriteLine("Hello World!");
        }
    }
}
