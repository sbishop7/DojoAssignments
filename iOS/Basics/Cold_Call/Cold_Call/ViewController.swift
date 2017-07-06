//
//  ViewController.swift
//  Cold_Call
//
//  Created by Seth Bishop on 7/6/17.
//  Copyright © 2017 Seth Bishop. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var names = ["Ready?", "Courtney", "Cody", "Jay", "Jimmy", "Bryant", "Uyganga", "Ryota"]
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBAction func ColdCallButtonPressed(_ sender: UIButton) {
        nameLabel.text = "\(names[Int(arc4random_uniform(UInt32(names.count - 1)) + 1)])"
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        nameLabel.text = "\(names[0])"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

