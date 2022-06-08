using System;

namespace ForLogic
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] intArray = {1, 2, 3, 4, 5};
            for (int i = 1; i < intArray.Length; i++)
            {
                intArray[i] += intArray[i - 1];
            }

            foreach (var item in intArray)
            {
                Console.WriteLine(item);
            }
        }
    }
}
