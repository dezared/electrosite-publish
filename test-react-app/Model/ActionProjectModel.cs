namespace elitstroy.Model
{
    public class ActionProjectModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Money { get; set; }
        public int Meter { get; set; }
        public int Year { get; set; }
        public string FoundamentInfo { get; set; }
        public string WallsInfo { get; set; }
        public string Perekritie { get; set; }
        public string RoofInfo { get; set; }
        public string WareSaftyInfo { get; set; }
        public string FacadeInfo { get; set; }
        public string PeregorodgiInfo { get; set; }
        public List<string> MyFiles { get; set; }
    }
}
