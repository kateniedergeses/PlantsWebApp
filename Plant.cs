namespace PlantsWebApp{
    
    abstract class Plant{
        enum Size {
            Small, 
            Medium, 
            Large
        }

        enum WaterNeed {
            Small,
            Medium,
            Large
        }

        int waterStatus = 5;
        DateOnly lastWateredDate;
        string name;


        void waterPlant(){
            waterStatus++;
        }

        void displayPlantPicture(){

        }

        
        void displayWaterStatus(){
            if(waterStatus < 3){
                //create alert pop up that says Water ME!

            }
            Console.WriteLine("Water Status is " + waterStatus);
        }

        string namePlant(){
            return name;
        }

    }
}