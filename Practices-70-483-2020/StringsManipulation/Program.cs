using System;

namespace StringsManipulation
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "This is a ramdom sentence.";

            string result = str.Substring(0, str.LastIndexOf("is")) + str.Substring(str.LastIndexOf("ramdom"));
;            Console.WriteLine(result);
        }
    }
}
