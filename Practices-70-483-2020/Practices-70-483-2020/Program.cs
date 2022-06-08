using System;

namespace Practices_70_483_2020
{


    interface IEnglish
    {
        int Marks { get; }
    }

    interface IMath 
    {
        int Marks { get; }
    }

    class Student : IEnglish, IMath
    {
        int english = 10;
        private int math = 9;

        int IMath.Marks
        {
            get { return english; }
        }

        int IEnglish.Marks
        {
            get { return math; }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Student std = new Student();
            int english = ((IEnglish) std).Marks;
            int math = ((IMath) std).Marks;

            Console.WriteLine("English Marks = {0} Math Marks= {1}", english,math);

            Console.ReadLine();
        }
    }
}
