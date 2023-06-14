﻿using System.ComponentModel.DataAnnotations;

namespace Domain;

public class Product
{
    [Key]   
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public int Count { get; set; }
}